import { SupabaseClient } from '@supabase/supabase-js';
import { UserCreateDTO } from './dto';

export function userService({ supabase }: { supabase: SupabaseClient }) {
  function create({ email, password, name }: UserCreateDTO) {
    return supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
  }

  return {
    create,
  };
}
