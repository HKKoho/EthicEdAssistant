
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Module, Cycle } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase: SupabaseClient | null = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const isSupabaseConfigured = () => !!supabase;

// --- Cycles ---
export const getCycles = async (): Promise<Cycle[]> => {
  if (!supabase) return [];
  const { data, error } = await supabase.from('cycles').select('*').order('id');
  if (error) { console.error('getCycles error:', error); return []; }
  return data || [];
};

// --- Modules ---
export const getModules = async (): Promise<Module[]> => {
  if (!supabase) return [];
  const { data, error } = await supabase.from('modules').select('*').order('id');
  if (error) { console.error('getModules error:', error); return []; }
  return (data || []).map(row => ({
    id: row.id,
    cycleId: row.cycle_id,
    title: row.title,
    subtitle: row.subtitle,
    lifeQuestions: row.life_questions,
    perspectives: row.perspectives,
    tensionGuide: row.tension_guide,
    discussionPrompts: row.discussion_prompts,
    summary: row.summary,
  }));
};

export const saveModule = async (module: Module): Promise<boolean> => {
  if (!supabase) return false;
  const row = {
    id: module.id,
    cycle_id: module.cycleId,
    title: module.title,
    subtitle: module.subtitle,
    life_questions: module.lifeQuestions,
    perspectives: module.perspectives,
    tension_guide: module.tensionGuide,
    discussion_prompts: module.discussionPrompts,
    summary: module.summary,
  };
  const { error } = await supabase.from('modules').upsert(row, { onConflict: 'id' });
  if (error) { console.error('saveModule error:', error); return false; }
  return true;
};

export const deleteModule = async (id: number): Promise<boolean> => {
  if (!supabase) return false;
  const { error } = await supabase.from('modules').delete().eq('id', id);
  if (error) { console.error('deleteModule error:', error); return false; }
  return true;
};

// --- Student Progress ---
export interface StudentProgressRecord {
  id?: string;
  student_name: string;
  module_id: number;
  step: string;
  user_inputs: Record<string, string>;
  ai_feedback?: string | null;
  completed: boolean;
  created_at?: string;
  updated_at?: string;
}

export const saveStudentProgress = async (data: Omit<StudentProgressRecord, 'id' | 'created_at' | 'updated_at'>): Promise<boolean> => {
  if (!supabase) return false;
  const { error } = await supabase
    .from('student_progress')
    .upsert(
      { ...data, updated_at: new Date().toISOString() },
      { onConflict: 'student_name,module_id' }
    );
  if (error) { console.error('saveStudentProgress error:', error); return false; }
  return true;
};

export const getStudentProgress = async (): Promise<StudentProgressRecord[]> => {
  if (!supabase) return [];
  const { data, error } = await supabase.from('student_progress').select('*').order('updated_at', { ascending: false });
  if (error) { console.error('getStudentProgress error:', error); return []; }
  return data || [];
};

export const getProgressByModule = async (moduleId: number): Promise<StudentProgressRecord[]> => {
  if (!supabase) return [];
  const { data, error } = await supabase.from('student_progress').select('*').eq('module_id', moduleId);
  if (error) { console.error('getProgressByModule error:', error); return []; }
  return data || [];
};
