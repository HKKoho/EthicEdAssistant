
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ModuleList from './components/ModuleList';
import ModulePlayer from './components/ModulePlayer';
import TeachingAssistant from './components/TeachingAssistant';
import BeforeClassLayout from './components/BeforeClassLayout';
import Login from './components/Login';
import { Module, User } from './types';
import { MODULES } from './constants';
import { LanguageProvider, useLanguage } from './i18n';

const MODULES_STORAGE_KEY = 'ethics_explorer_modules';

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const [user, setUser] = useState<User | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [showAssistant, setShowAssistant] = useState(false);
  const [modules, setModules] = useState<Module[]>(() => {
    const saved = localStorage.getItem(MODULES_STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch { /* fall through */ }
    }
    return MODULES;
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('ethics_explorer_user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setUser({ ...parsed, loginTime: new Date(parsed.loginTime) });
      } catch (e) {
        console.error("Failed to parse user data");
      }
    }
  }, []);

  const persistModules = (updated: Module[]) => {
    setModules(updated);
    localStorage.setItem(MODULES_STORAGE_KEY, JSON.stringify(updated));
  };

  const handleSaveModule = (module: Module) => {
    const exists = modules.find(m => m.id === module.id);
    if (exists) {
      persistModules(modules.map(m => m.id === module.id ? module : m));
    } else {
      persistModules([...modules, module]);
    }
  };

  const handleDeleteModule = (id: number) => {
    persistModules(modules.filter(m => m.id !== id));
  };

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('ethics_explorer_user', JSON.stringify(newUser));
  };

  const handleModuleSelect = (module: Module) => {
    setSelectedModule(module);
    window.scrollTo(0, 0);
  };

  const handleHomeClick = () => {
    setSelectedModule(null);
  };

  const handleModuleComplete = () => {
    if (selectedModule) {
      setCompletedModules(prev => Array.from(new Set([...prev, selectedModule.id])));
      setSelectedModule(null);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setShowAssistant(false);
    localStorage.removeItem('ethics_explorer_user');
  };

  const isAdmin = user?.role === 'admin';

  return (
    <Layout onHomeClick={handleHomeClick}>
      {!user && <Login onLogin={handleLogin} />}

      {user && (
        <div className="mb-6 flex justify-between items-center text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            {isAdmin ? (
              <span className="bg-slate-800 text-white px-2 py-0.5 rounded font-bold">{t('app.beforeClass')}</span>
            ) : (
              <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-bold">{t('app.onClass')}</span>
            )}
            <span className="font-medium text-slate-600">{user.name}</span>
          </div>
          <button onClick={handleLogout} className="hover:text-orange-600 transition-colors underline">{t('app.logout')}</button>
        </div>
      )}

      {user && isAdmin && (
        <BeforeClassLayout
          modules={modules}
          onSaveModule={handleSaveModule}
          onDeleteModule={handleDeleteModule}
        />
      )}

      {user && !isAdmin && (
        selectedModule ? (
          <ModulePlayer
            module={selectedModule}
            onComplete={handleModuleComplete}
          />
        ) : (
          <ModuleList
            modules={modules}
            onSelectModule={handleModuleSelect}
          />
        )
      )}

      {/* Floating AI Teaching Assistant Button (students only) */}
      {user && !isAdmin && (
        <button
          onClick={() => setShowAssistant(true)}
          className="fixed bottom-6 right-6 z-[150] bg-orange-500 hover:bg-orange-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
          title={t('app.aiAssistant')}
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z" />
            <circle cx="9.5" cy="10" r="1" fill="currentColor" />
            <circle cx="14.5" cy="10" r="1" fill="currentColor" />
            <path d="M9.5 14a3 3 0 0 0 5 0" />
          </svg>
          <span className="absolute -top-8 right-0 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {t('app.aiAssistant')}
          </span>
        </button>
      )}

      {/* AI Teaching Assistant Chat (students only) */}
      {user && !isAdmin && showAssistant && (
        <TeachingAssistant
          mode={isAdmin ? 'before-class' : 'on-class'}
          onClose={() => setShowAssistant(false)}
        />
      )}
    </Layout>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;
