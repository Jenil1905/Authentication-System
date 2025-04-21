import { supabase } from '../utils/supabaseClient';

// Fetch all data from a table
export async function fetchData(table) {
  const { data, error } = await supabase.from(table).select('*');
  if (error) throw new Error(error.message);
  return data;
}

// Insert new data
export async function insertData(table, newData) {
  const { data, error } = await supabase.from(table).insert([newData]);
  if (error) throw new Error(error.message);
  return data;
}
