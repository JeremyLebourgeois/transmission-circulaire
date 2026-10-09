import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tukuxjbixrgmgrohxzji.supabase.co';
const supabaseKey = 'sb_publishable_X2-cgxxZXDgnrsCbnF1SMA_FxKMXxrl';
const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  const { data, error } = await supabase.from('profiles').select('*');
  console.log("Error:", error);
  console.log("Data:", data);
}

test();
