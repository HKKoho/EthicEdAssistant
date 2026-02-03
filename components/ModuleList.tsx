
import React from 'react';
import { CYCLES } from '../constants';
import { Module } from '../types';
import { useLanguage } from '../i18n';
import { splitBilingual } from '../contentUtils';

interface ModuleListProps {
  modules: Module[];
  onSelectModule: (module: Module) => void;
}

const ModuleList: React.FC<ModuleListProps> = ({ modules, onSelectModule }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-12 animate-fadeIn">
      <section className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          {t('moduleList.heading')}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t('moduleList.description')}
        </p>
      </section>

      {CYCLES.map(cycle => (
        <div key={cycle.id} className="space-y-6">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-orange-700 bg-orange-50 px-4 py-1 rounded-full border border-orange-100">
              {splitBilingual(cycle.title, lang)}
            </h3>
            <div className="h-px flex-grow bg-slate-200"></div>
          </div>
          <p className="text-sm text-slate-500 px-2">{splitBilingual(cycle.description, lang)}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.filter(m => m.cycleId === cycle.id).map(module => (
              <div
                key={module.id}
                onClick={() => onSelectModule(module)}
                className="group relative bg-orange-50 rounded-xl shadow-sm border border-orange-200 p-6 hover:shadow-xl hover:border-orange-300 transition-all cursor-pointer transform hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 text-orange-100 font-black text-4xl group-hover:text-orange-200/50 transition-colors">
                  {module.id.toString().padStart(2, '0')}
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-slate-800 mb-2 pr-10">
                    {splitBilingual(module.title.split('|')[1]?.trim() || module.title, lang)}
                    {module.id > 12 && (
                      <span className="block text-xs font-normal text-slate-400 mt-1 italic">
                        {t('moduleList.comingSoon')}
                      </span>
                    )}
                  </h4>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{splitBilingual(module.subtitle, lang)}</p>
                  <div className="flex items-center text-orange-600 text-sm font-medium">
                    {t('moduleList.startLesson')}
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
