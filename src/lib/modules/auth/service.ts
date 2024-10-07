import { SupabaseClient } from '@supabase/supabase-js';
import { SignInDTO } from './dto';

export function authService({ supabase }: { supabase: SupabaseClient }) {
  function login({ email, password }: SignInDTO) {
    return supabase.auth.signInWithPassword({ email, password });
  }

  function logout() {
    return supabase.auth.signOut();
  }

  return {
    login,
    logout,
  };
}
