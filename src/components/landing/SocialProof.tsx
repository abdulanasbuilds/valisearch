const LOGOS = [
  "Stripe", "Linear", "Notion", "Vercel", "Loom",
  "Figma", "Airtable", "Webflow", "Intercom", "Rippling",
];

export function SocialProof() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section className="border-t border-white/[0.05] py-14 overflow-hidden">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/20 mb-10">
        Built by alumni from
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0A0A0A, transparent)" }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0A0A0A, transparent)" }}
        />
        <div className="overflow-hidden">
          <div className="marquee-track">
            {doubled.map((name, i) => (
              <span key={i} className="text-[14px] font-semibold text-white/20 shrink-0 tracking-[-0.01em]">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
