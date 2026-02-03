
import React, { useState } from 'react';
import { Module, PerspectiveType } from '../types';
import { CYCLES } from '../constants';
import { useLanguage } from '../i18n';
import { splitBilingual } from '../contentUtils';

interface ModuleEditorProps {
  module: Module | null;
  nextId: number;
  onSave: (module: Module) => void;
  onCancel: () => void;
}

const emptyModule = (id: number): Module => ({
  id,
  cycleId: 1,
  title: '',
  subtitle: '',
  lifeQuestions: [''],
  perspectives: {
    [PerspectiveType.VIRTUE]: { tradition: 'Virtue Ethics 德性倫理', theme: '', description: '' },
    [PerspectiveType.DUTY]: { tradition: 'Duty Ethics 義務倫理', theme: '', description: '' },
    [PerspectiveType.CONSEQUENCE]: { tradition: 'Consequentialism 後果倫理', theme: '', description: '' },
  },
  tensionGuide: '',
  discussionPrompts: [''],
  summary: '',
});

const ModuleEditor: React.FC<ModuleEditorProps> = ({ module, nextId, onSave, onCancel }) => {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState<Module>(module || emptyModule(nextId));

  const updateField = <K extends keyof Module>(key: K, value: Module[K]) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const updatePerspective = (type: PerspectiveType, field: string, value: string) => {
    setForm(prev => ({
      ...prev,
      perspectives: {
        ...prev.perspectives,
        [type]: { ...prev.perspectives[type], [field]: value },
      },
    }));
  };

  const updateListItem = (key: 'lifeQuestions' | 'discussionPrompts', index: number, value: string) => {
    setForm(prev => {
      const list = [...prev[key]];
      list[index] = value;
      return { ...prev, [key]: list };
    });
  };

  const addListItem = (key: 'lifeQuestions' | 'discussionPrompts') => {
    setForm(prev => ({ ...prev, [key]: [...prev[key], ''] }));
  };

  const removeListItem = (key: 'lifeQuestions' | 'discussionPrompts', index: number) => {
    setForm(prev => ({ ...prev, [key]: prev[key].filter((_, i) => i !== index) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  const labelClass = 'block text-sm font-semibold text-slate-700 mb-1';
  const inputClass = 'w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-0 outline-none text-sm';
  const textareaClass = inputClass + ' resize-y';

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">
        {module ? `${t('editor.editModule')} #${module.id}` : t('editor.addModule')}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>{t('editor.title')}</label>
            <input className={inputClass} value={form.title} onChange={e => updateField('title', e.target.value)} required />
          </div>
          <div>
            <label className={labelClass}>{t('editor.subtitle')}</label>
            <input className={inputClass} value={form.subtitle} onChange={e => updateField('subtitle', e.target.value)} required />
          </div>
        </div>

        <div>
          <label className={labelClass}>{t('editor.cycle')}</label>
          <select className={inputClass} value={form.cycleId} onChange={e => updateField('cycleId', Number(e.target.value))}>
            {CYCLES.map(c => <option key={c.id} value={c.id}>{splitBilingual(c.title, lang)}</option>)}
          </select>
        </div>

        <div>
          <label className={labelClass}>{t('editor.lifeQuestions')}</label>
          {form.lifeQuestions.map((q, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <textarea className={textareaClass} rows={2} value={q} onChange={e => updateListItem('lifeQuestions', i, e.target.value)} />
              {form.lifeQuestions.length > 1 && (
                <button type="button" onClick={() => removeListItem('lifeQuestions', i)} className="text-red-400 hover:text-red-600 text-xl px-2">×</button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => addListItem('lifeQuestions')} className="text-orange-600 text-sm font-medium hover:underline">{t('editor.addQuestion')}</button>
        </div>

        {([PerspectiveType.VIRTUE, PerspectiveType.DUTY, PerspectiveType.CONSEQUENCE] as const).map(type => (
          <div key={type} className="bg-slate-50 rounded-xl p-4 space-y-3">
            <h4 className="font-bold text-slate-700">{splitBilingual(form.perspectives[type].tradition, lang)}</h4>
            <div>
              <label className={labelClass}>{t('editor.theme')}</label>
              <input className={inputClass} value={form.perspectives[type].theme} onChange={e => updatePerspective(type, 'theme', e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>{t('editor.description')}</label>
              <textarea className={textareaClass} rows={6} value={form.perspectives[type].description} onChange={e => updatePerspective(type, 'description', e.target.value)} />
            </div>
          </div>
        ))}

        <div>
          <label className={labelClass}>{t('editor.tensionGuide')}</label>
          <textarea className={textareaClass} rows={6} value={form.tensionGuide} onChange={e => updateField('tensionGuide', e.target.value)} />
        </div>

        <div>
          <label className={labelClass}>{t('editor.discussionPrompts')}</label>
          {form.discussionPrompts.map((p, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <textarea className={textareaClass} rows={2} value={p} onChange={e => updateListItem('discussionPrompts', i, e.target.value)} />
              {form.discussionPrompts.length > 1 && (
                <button type="button" onClick={() => removeListItem('discussionPrompts', i)} className="text-red-400 hover:text-red-600 text-xl px-2">×</button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => addListItem('discussionPrompts')} className="text-orange-600 text-sm font-medium hover:underline">{t('editor.addPrompt')}</button>
        </div>

        <div>
          <label className={labelClass}>{t('editor.summary')}</label>
          <textarea className={textareaClass} rows={4} value={form.summary} onChange={e => updateField('summary', e.target.value)} />
        </div>

        <div className="flex gap-3 pt-4 border-t border-slate-100">
          <button type="submit" className="bg-orange-500 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-orange-600 transition-all">
            {t('editor.save')}
          </button>
          <button type="button" onClick={onCancel} className="bg-slate-100 text-slate-600 px-6 py-2.5 rounded-xl font-bold hover:bg-slate-200 transition-all">
            {t('editor.cancel')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModuleEditor;
