import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://vybmenuacwoljaxpcxno.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5Ym1lbnVhY3dvbGpheHBjeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjUwNTcsImV4cCI6MjA1ODA0MTA1N30.yyY8NYaaCDc6FzTgU9faRMl1zKKsSjC0HioMPsYbwPo";

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or Anon Key is missing. Check your .env file.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
