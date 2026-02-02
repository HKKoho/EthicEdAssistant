
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onHomeClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onHomeClick }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-900 text-white py-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div
            className="cursor-pointer group flex items-center space-x-2"
            onClick={onHomeClick}
          >
            <div className="bg-amber-400 w-10 h-10 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl group-hover:bg-amber-300 transition-colors">
              倫
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">Ethics Explorer 倫理探索</h1>
              <p className="text-xs text-slate-400 font-light tracking-widest uppercase">Christian Ethics for a Diverse World</p>
            </div>
          </div>
          <nav className="hidden md:block">
            <button
              onClick={onHomeClick}
              className="px-4 py-2 hover:bg-slate-800 rounded-lg transition-colors font-medium"
            >
              All Lessons 課程總覽
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-slate-100 py-10 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">© 2025 Ethics Explorer 倫理探索: Grade 7-9 Christian Ethics</p>
          <div className="mt-4 flex justify-center space-x-6 text-slate-400 text-xs">
            <span>Virtue Ethics 德性倫理</span>
            <span>Duty Ethics 義務倫理</span>
            <span>Consequentialism 後果倫理</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
