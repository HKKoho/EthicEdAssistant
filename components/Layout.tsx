
import React from 'react';
import { useLanguage } from '../i18n';

interface LayoutProps {
  children: React.ReactNode;
  onHomeClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onHomeClick }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col relative" style={{ backgroundImage: 'url(/Students.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-white/80" />
      <header className="relative z-10 bg-slate-900 text-white py-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div
            className="cursor-pointer group flex items-center space-x-2"
            onClick={onHomeClick}
          >
            <div className="bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl group-hover:bg-orange-300 transition-colors">
              倫
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">{t('layout.title')}</h1>
              <p className="text-xs text-slate-400 font-light tracking-widest uppercase">{t('layout.tagline')}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="px-3 py-1.5 rounded-full text-xs font-bold border border-slate-600 hover:border-orange-400 hover:text-orange-400 transition-colors"
            >
              {lang === 'en' ? '繁中' : 'EN'}
            </button>
            <nav className="hidden md:block">
              <button
                onClick={onHomeClick}
                className="px-4 py-2 hover:bg-slate-800 rounded-lg transition-colors font-medium"
              >
                {t('layout.allLessons')}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="relative z-10 bg-slate-100/90 py-10 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">{t('layout.footer')}</p>
          <div className="mt-4 flex justify-center space-x-6 text-slate-400 text-xs">
            <span>{t('layout.virtueEthics')}</span>
            <span>{t('layout.dutyEthics')}</span>
            <span>{t('layout.consequentialism')}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
