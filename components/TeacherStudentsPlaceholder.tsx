
import React from 'react';
import { useLanguage } from '../i18n';

const TeacherStudentsPlaceholder: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="text-center py-20 text-slate-400 animate-fadeIn">
      <p className="text-5xl mb-4">👩‍🏫</p>
      <h2 className="text-xl font-bold text-slate-600 mb-2">{t('sidebar.teacherStudents')}</h2>
      <p className="text-sm">{t('placeholder.comingSoon')}</p>
      <p className="text-xs mt-2 max-w-md mx-auto">{t('placeholder.teacherStudentsDesc')}</p>
    </div>
  );
};

export default TeacherStudentsPlaceholder;
