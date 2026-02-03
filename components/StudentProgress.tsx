
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n';
import { getStudentProgress, StudentProgressRecord, isSupabaseConfigured } from '../services/supabaseService';

const StudentProgress: React.FC = () => {
  const { t } = useLanguage();
  const [records, setRecords] = useState<StudentProgressRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!isSupabaseConfigured()) { setLoading(false); return; }
      const data = await getStudentProgress();
      setRecords(data);
      setLoading(false);
    };
    load();
  }, []);

  if (!isSupabaseConfigured()) {
    return (
      <div className="text-center py-16 text-slate-400">
        <p className="text-4xl mb-4">📊</p>
        <p className="font-medium text-slate-600">{t('progress.title')}</p>
        <p className="text-sm mt-2">{t('progress.noSupabase')}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center py-16 text-slate-400">
        <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p>{t('progress.loading')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">{t('progress.title')}</h2>
        <p className="text-slate-500 text-sm mt-1">{records.length} {t('progress.recordsTotal')}</p>
      </div>

      {records.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <p className="text-4xl mb-4">📊</p>
          <p>{t('progress.empty')}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-left">
                <th className="px-4 py-3 font-medium">{t('progress.colStudent')}</th>
                <th className="px-4 py-3 font-medium">{t('progress.colModule')}</th>
                <th className="px-4 py-3 font-medium hidden md:table-cell">{t('progress.colStep')}</th>
                <th className="px-4 py-3 font-medium">{t('progress.colStatus')}</th>
                <th className="px-4 py-3 font-medium hidden lg:table-cell">{t('progress.colUpdated')}</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">{r.student_name}</td>
                  <td className="px-4 py-3 text-slate-600">Lesson {r.module_id}</td>
                  <td className="px-4 py-3 text-slate-500 hidden md:table-cell">{r.step}</td>
                  <td className="px-4 py-3">
                    {r.completed ? (
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">{t('progress.completed')}</span>
                    ) : (
                      <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-bold">{t('progress.inProgress')}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-400 text-xs hidden lg:table-cell">
                    {r.updated_at ? new Date(r.updated_at).toLocaleDateString() : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentProgress;
