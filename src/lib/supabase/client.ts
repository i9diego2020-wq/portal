import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://zhzgssqdwwumoqnrrvkl.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_-KYc-H2Z1evffUhZOp5IxA_J_2jeVBl";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
