
import React, { useState } from 'react';
import { useLanguage } from '../i18n';
import { Module } from '../types';
import AdminDashboard from './AdminDashboard';
import TeachingAssistant from './TeachingAssistant';
import StudentWednesdayPlaceholder from './StudentWednesdayPlaceholder';
import TeacherStudentsPlaceholder from './TeacherStudentsPlaceholder';
import StudentProgress from './StudentProgress';
import AnalysisPlaceholder from './AnalysisPlaceholder';
import AssignmentsPlaceholder from './AssignmentsPlaceholder';

type Section = 'content' | 'wednesday' | 'student-wednesday' | 'teacher-students' | 'progress' | 'analysis' | 'assignments';

interface BeforeClassLayoutProps {
  modules: Module[];
  onSaveModule: (module: Module) => void;
  onDeleteModule: (id: number) => void;
}

const NAV_ITEMS: { key: Section; icon: string; labelKey: string }[] = [
  { key: 'content', icon: '📚', labelKey: 'sidebar.content' },
  { key: 'wednesday', icon: '🤖', labelKey: 'sidebar.wednesday' },
  { key: 'student-wednesday', icon: '💬', labelKey: 'sidebar.studentWednesday' },
  { key: 'teacher-students', icon: '👩‍🏫', labelKey: 'sidebar.teacherStudents' },
  { key: 'progress', icon: '📊', labelKey: 'sidebar.progress' },
  { key: 'analysis', icon: '📈', labelKey: 'sidebar.analysis' },
  { key: 'assignments', icon: '📝', labelKey: 'sidebar.assignments' },
];

const BeforeClassLayout: React.FC<BeforeClassLayoutProps> = ({ modules, onSaveModule, onDeleteModule }) => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<Section>('content');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'content':
        return <AdminDashboard modules={modules} onSave={onSaveModule} onDelete={onDeleteModule} />;
      case 'wednesday':
        return (
          <div className="h-[calc(100vh-220px)] flex flex-col">
            <TeachingAssistant mode="before-class" onClose={() => setActiveSection('content')} inline />
          </div>
        );
      case 'student-wednesday':
        return <StudentWednesdayPlaceholder />;
      case 'teacher-students':
        return <TeacherStudentsPlaceholder />;
      case 'progress':
        return <StudentProgress />;
      case 'analysis':
        return <AnalysisPlaceholder />;
      case 'assignments':
        return <AssignmentsPlaceholder />;
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-200px)] -mx-4 -mt-8">
      {/* Sidebar */}
      <aside className={`bg-slate-900 text-white flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="sticky top-[88px]">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full px-4 py-3 text-slate-400 hover:text-white transition-colors flex items-center justify-end"
          >
            <svg className={`w-5 h-5 transition-transform ${sidebarOpen ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
          <nav className="space-y-1 px-2">
            {NAV_ITEMS.map(item => {
              const isActive = activeSection === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setActiveSection(item.key)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all text-left ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                  title={t(item.labelKey)}
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  {sidebarOpen && (
                    <span className="text-sm font-medium truncate">{t(item.labelKey)}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default BeforeClassLayout;
