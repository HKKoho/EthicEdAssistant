
import React from 'react';
import { MODULES, CYCLES } from '../constants';
import { Module } from '../types';

interface ModuleListProps {
  onSelectModule: (module: Module) => void;
}

const ModuleList: React.FC<ModuleListProps> = ({ onSelectModule }) => {
  return (
    <div className="space-y-12 animate-fadeIn">
      <section className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          24 Ethics Lessons 倫理課程
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Explore real-life ethical dilemmas through three lenses: virtue, duty, and consequence — drawing from Christian faith and the world's great traditions.
          透過三個視角探索真實的倫理困境：德性、義務與後果——汲取基督教信仰和世界偉大傳統的智慧。
        </p>
      </section>

      {CYCLES.map(cycle => (
        <div key={cycle.id} className="space-y-6">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-amber-700 bg-amber-50 px-4 py-1 rounded-full border border-amber-100">
              {cycle.title}
            </h3>
            <div className="h-px flex-grow bg-slate-200"></div>
          </div>
          <p className="text-sm text-slate-500 px-2">{cycle.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.filter(m => m.cycleId === cycle.id).map(module => (
              <div
                key={module.id}
                onClick={() => onSelectModule(module)}
                className="group relative bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-xl hover:border-amber-200 transition-all cursor-pointer transform hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 text-slate-100 font-black text-4xl group-hover:text-amber-50 transition-colors">
                  {module.id.toString().padStart(2, '0')}
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-slate-800 mb-2 pr-10">
                    {module.title.split('|')[1]?.trim() || module.title}
                    {module.id > 12 && (
                      <span className="block text-xs font-normal text-slate-400 mt-1 italic">
                        (Coming Soon)
                      </span>
                    )}
                  </h4>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{module.subtitle}</p>
                  <div className="flex items-center text-amber-600 text-sm font-medium">
                    Start Lesson 開始
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModuleList;
