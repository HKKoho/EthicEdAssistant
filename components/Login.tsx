
import React, { useState } from 'react';
import { User } from '../types';
import { useLanguage } from '../i18n';

interface LoginProps {
  onLogin: (user: User) => void;
}

const ADMIN_PASSWORD = 'NELSON2@25';

const AiAssistantIcon: React.FC<{ size?: string }> = ({ size = 'w-8 h-8' }) => (
  <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z" />
    <circle cx="9.5" cy="10" r="1" fill="currentColor" />
    <circle cx="14.5" cy="10" r="1" fill="currentColor" />
    <path d="M9.5 14a3 3 0 0 0 5 0" />
  </svg>
);

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin({
        name: name.trim(),
        role: 'student',
        loginTime: new Date()
      });
    }
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      onLogin({
        name: 'Admin',
        role: 'admin',
        loginTime: new Date()
      });
    } else {
      setAdminError(t('login.incorrectPassword'));
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url(/HIGHSCHOOL.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-slate-900/60" />

      <div className="relative z-10 bg-white/95 backdrop-blur rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center text-orange-600 text-3xl font-bold mx-auto mb-4">
            倫
          </div>
          <h2 className="text-3xl font-bold text-slate-800 serif">{t('login.welcome')}</h2>
          <h3 className="text-lg text-slate-600 serif mt-1">{t('login.welcomeSub')}</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before Class (Teacher Prep) */}
          <div className="bg-orange-50 rounded-2xl p-6 shadow border border-orange-100">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-2xl">📋</span>
              <h4 className="text-lg font-bold text-slate-700">{t('login.beforeClass')}</h4>
            </div>
            <p className="text-sm text-slate-400 text-center mb-4">{t('login.beforeClassSub')}</p>
            <form onSubmit={handleAdminSubmit} className="space-y-4">
              <div>
                <label htmlFor="adminPw" className="block text-sm font-medium text-slate-700 mb-1">{t('login.password')}</label>
                <input
                  type="password"
                  id="adminPw"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-orange-100 focus:border-orange-500 focus:ring-0 outline-none transition-all text-center bg-white"
                  placeholder={t('login.passwordPlaceholder')}
                  value={adminPassword}
                  onChange={(e) => { setAdminPassword(e.target.value); setAdminError(''); }}
                />
                {adminError && <p className="text-red-500 text-xs mt-1 text-center">{adminError}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow"
              >
                {t('login.enter')}
              </button>
            </form>
            <div className="mt-4 pt-3 border-t border-orange-100 flex items-center gap-2 text-slate-500">
              <AiAssistantIcon />
              <span className="text-xs leading-tight">{t('login.aiBeforeClass')}</span>
            </div>
          </div>

          {/* On Class (Student) */}
          <div className="bg-orange-50 rounded-2xl p-6 shadow border border-orange-100">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-2xl">🎓</span>
              <h4 className="text-lg font-bold text-slate-700">{t('login.onClass')}</h4>
            </div>
            <p className="text-sm text-slate-400 text-center mb-4">{t('login.onClassSub')}</p>
            <form onSubmit={handleStudentSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t('login.yourName')}</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-orange-100 focus:border-orange-500 focus:ring-0 outline-none transition-all text-center bg-white"
                  placeholder={t('login.namePlaceholder')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow"
              >
                {t('login.startLearning')}
              </button>
            </form>
            <div className="mt-4 pt-3 border-t border-orange-100 flex items-center gap-2 text-slate-500">
              <AiAssistantIcon />
              <span className="text-xs leading-tight">{t('login.aiInClass')}</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-400 text-xs leading-relaxed">
          {t('login.verse')}
        </p>
      </div>
    </div>
  );
};

export default Login;
