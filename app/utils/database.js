import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://irpekaevcakdnuipvbje.supabase.co",
  "sb_publishable_svDeluRihFmxD3roHGXiXw_DA-m7wOK",
);

export default supabase;
