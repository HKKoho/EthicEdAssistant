
import React, { useState } from 'react';
import { Module } from '../types';
import { CYCLES } from '../constants';
import ModuleEditor from './ModuleEditor';
import { useLanguage } from '../i18n';
import { splitBilingual } from '../contentUtils';

interface AdminDashboardProps {
  modules: Module[];
  onSave: (module: Module) => void;
  onDelete: (id: number) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ modules, onSave, onDelete }) => {
  const { lang, t } = useLanguage();
  const [editingModule, setEditingModule] = useState<Module | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  if (editingModule || isAdding) {
    return (
      <ModuleEditor
        module={editingModule}
        nextId={modules.length > 0 ? Math.max(...modules.map(m => m.id)) + 1 : 1}
        onSave={(m) => {
          onSave(m);
          setEditingModule(null);
          setIsAdding(false);
        }}
        onCancel={() => {
          setEditingModule(null);
          setIsAdding(false);
        }}
      />
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{t('admin.heading')}</h2>
          <p className="text-slate-500 text-sm mt-1">{modules.length} {t('admin.modulesTotal')}</p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-orange-600 transition-all shadow"
        >
          {t('admin.addModule')}
        </button>
      </div>

      {CYCLES.map(cycle => {
        const cycleModules = modules.filter(m => m.cycleId === cycle.id);
        if (cycleModules.length === 0) return null;
        return (
          <div key={cycle.id} className="space-y-3">
            <h3 className="text-lg font-bold text-orange-700 bg-orange-50 px-4 py-1 rounded-full border border-orange-100 inline-block">
              {splitBilingual(cycle.title, lang)}
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-left">
                    <th className="px-4 py-3 font-medium w-12">{t('admin.colId')}</th>
                    <th className="px-4 py-3 font-medium">{t('admin.colTitle')}</th>
                    <th className="px-4 py-3 font-medium hidden md:table-cell">{t('admin.colSubtitle')}</th>
                    <th className="px-4 py-3 font-medium text-right w-40">{t('admin.colActions')}</th>
                  </tr>
                </thead>
                <tbody>
                  {cycleModules.map(module => (
                    <tr key={module.id} className="border-t border-slate-100 hover:bg-slate-50">
                      <td className="px-4 py-3 text-slate-400 font-mono">{module.id}</td>
                      <td className="px-4 py-3 font-medium text-slate-800">
                        {splitBilingual(module.title.split('|')[1]?.trim() || module.title, lang)}
                      </td>
                      <td className="px-4 py-3 text-slate-500 hidden md:table-cell">{splitBilingual(module.subtitle, lang)}</td>
                      <td className="px-4 py-3 text-right space-x-2">
                        <button
                          onClick={() => setEditingModule(module)}
                          className="text-orange-600 hover:text-orange-800 font-medium"
                        >
                          {t('admin.edit')}
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`${t('admin.deleteConfirm')} "${module.title}"?`)) onDelete(module.id);
                          }}
                          className="text-red-400 hover:text-red-600 font-medium"
                        >
                          {t('admin.delete')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminDashboard;
