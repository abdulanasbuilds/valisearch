import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const body = await req.json();
    const eventName = body.meta.event_name;
    const customData = body.meta.custom_data;
    const userId = customData?.user_id;

    if (!userId) {
      return new Response(JSON.stringify({ error: "No user_id in custom_data" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log(`[LS-Webhook] Received ${eventName} for user ${userId}`);

    if (eventName === "order_created") {
      const variantId = body.data.attributes.variant_id.toString();
      let creditsToAdd = 0;
      let plan = "free";

      // Pro variant (from constants)
      if (variantId === "REPLACE_WITH_YOUR_PRO_ID" || variantId === "PRO_ID") {
        creditsToAdd = 200;
        plan = "pro";
      } 
      // Premium variant
      else if (variantId === "REPLACE_WITH_YOUR_PREMIUM_ID" || variantId === "PREMIUM_ID") {
        creditsToAdd = 10000; // Unlimited placeholder
        plan = "premium";
      }

      if (creditsToAdd > 0) {
        // Update credits
        const { data: credit } = await supabase
          .from("credits")
          .select("id, balance")
          .eq("user_id", userId)
          .single();

        if (credit) {
          await supabase
            .from("credits")
            .update({ balance: credit.balance + creditsToAdd, updated_at: new Date().toISOString() })
            .eq("id", credit.id);

          await supabase.from("credit_transactions").insert({
            user_id: userId, amount: creditsToAdd, reason: "purchase",
          });
        }

        // Update profile
        await supabase
          .from("profiles")
          .update({ plan })
          .eq("id", userId);
          
        // Update subscription record
        await supabase.from("subscriptions").upsert({
          user_id: userId,
          plan: plan,
          status: "active",
        }, { onConflict: "user_id" });
      }
    }

    if (eventName === "subscription_cancelled") {
      await supabase
        .from("profiles")
        .update({ plan: "free" })
        .eq("id", userId);
        
      await supabase
        .from("subscriptions")
        .update({ status: "cancelled", plan: "free" })
        .eq("user_id", userId);
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[LS-Webhook] Error:", e.message);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
