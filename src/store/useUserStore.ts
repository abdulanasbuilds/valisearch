import { create } from "zustand";
import { getSupabase } from "@/lib/supabase";
import type { User, Session } from "@supabase/supabase-js";

interface Profile {
  id: string;
  onboarding_completed: boolean;
  plan: string;
}

interface UserState {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;
  fetchProfile: () => Promise<void>;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
  user: null,
  session: null,
  profile: null,
  isLoading: true,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setSession: (session) =>
    set({ session, user: session?.user ?? null, isAuthenticated: !!session }),

  fetchProfile: async () => {
    const { user } = get();
    const supabase = getSupabase();
    if (supabase && user) {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      if (data) set({ profile: data });
    }
  },

  signOut: async () => {
    const supabase = getSupabase();
    if (supabase) {
      await supabase.auth.signOut();
    }
    set({ user: null, session: null, isAuthenticated: false });
  },

  initialize: async () => {
    const supabase = getSupabase();
    if (!supabase) {
      // No Supabase configured — skip auth, allow app to work in demo mode
      set({ isLoading: false });
      return;
    }

    // Set up auth state listener BEFORE getting session
    supabase.auth.onAuthStateChange(async (_event, session) => {
      set({
        session,
        user: session?.user ?? null,
        isAuthenticated: !!session,
      });
      if (session?.user) {
        await get().fetchProfile();
      }
      set({ isLoading: false });
    });

    // Check existing session
    const {
      data: { session },
    } = await supabase.auth.getSession();

    set({
      session,
      user: session?.user ?? null,
      isAuthenticated: !!session,
    });

    if (session?.user) {
      await get().fetchProfile();
    }

    set({ isLoading: false });
  },
}));
