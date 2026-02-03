
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Lang = 'en' | 'zh';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Layout
  'layout.title': { en: 'Ethics Explorer', zh: '倫理探索' },
  'layout.tagline': { en: 'Christian Ethics for a Diverse World', zh: '多元世界中的基督教倫理' },
  'layout.allLessons': { en: 'All Lessons', zh: '課程總覽' },
  'layout.footer': { en: '© 2025 Ethics Explorer: Grade 7-9 Christian Ethics', zh: '© 2025 倫理探索：初中基督教倫理' },
  'layout.virtueEthics': { en: 'Virtue Ethics', zh: '德性倫理' },
  'layout.dutyEthics': { en: 'Duty Ethics', zh: '義務倫理' },
  'layout.consequentialism': { en: 'Consequentialism', zh: '後果倫理' },

  // Login
  'login.welcome': { en: 'Welcome to Ethics Explorer', zh: '歡迎來到倫理探索' },
  'login.welcomeSub': { en: 'Christian Ethics for a Diverse World', zh: '多元世界中的基督教倫理' },
  'login.beforeClass': { en: 'Before Class', zh: '課前準備' },
  'login.beforeClassSub': { en: 'Teacher Preparation', zh: '教師備課' },
  'login.onClass': { en: 'In Class', zh: '課堂學習' },
  'login.onClassSub': { en: 'Student Learning', zh: '學生學習' },
  'login.password': { en: 'Password', zh: '密碼' },
  'login.passwordPlaceholder': { en: 'Enter password', zh: '輸入密碼' },
  'login.incorrectPassword': { en: 'Incorrect password', zh: '密碼錯誤' },
  'login.enter': { en: 'Enter', zh: '進入' },
  'login.yourName': { en: 'Your Name', zh: '你的名字' },
  'login.namePlaceholder': { en: 'e.g. Alex', zh: '例如：小明' },
  'login.startLearning': { en: 'Start Learning', zh: '開始學習' },
  'login.aiBeforeClass': { en: 'AI Teaching Assistant to help prepare your lesson', zh: '課前AI教學助手' },
  'login.aiInClass': { en: 'AI Teaching Assistant to help during the lesson', zh: '課堂AI教學助手' },
  'login.verse': { en: '"Act justly, love mercy, and walk humbly." — Micah 6:8', zh: '「行公義，好憐憫，存謙卑的心。」—— 彌迦書 6:8' },

  // App
  'app.beforeClass': { en: 'Before Class', zh: '課前準備' },
  'app.onClass': { en: 'In Class', zh: '課堂學習' },
  'app.logout': { en: 'Logout', zh: '登出' },
  'app.aiAssistant': { en: 'Wednesday', zh: 'Wednesday' },

  // ModuleList
  'moduleList.heading': { en: '24 Ethics Lessons', zh: '24 倫理課程' },
  'moduleList.description': { en: 'Explore real-life ethical dilemmas through three lenses: virtue, duty, and consequence — drawing from Christian faith and the world\'s great traditions.', zh: '透過三個視角探索真實的倫理困境：德性、義務與後果——汲取基督教信仰和世界偉大傳統的智慧。' },
  'moduleList.comingSoon': { en: '(Coming Soon)', zh: '(即將推出)' },
  'moduleList.startLesson': { en: 'Start Lesson', zh: '開始課程' },

  // ModulePlayer steps
  'player.step1': { en: 'Stage 1: Life Questions (8 min)', zh: '第一階段：生活提問 (8分鐘)' },
  'player.step2': { en: 'Stage 2: Three-Book Comparison (20 min)', zh: '第二階段：三卷書對照 (20分鐘)' },
  'player.step3': { en: 'Stage 3: Value Tension Guide (15 min)', zh: '第三階段：價值張力引導 (15分鐘)' },
  'player.step4': { en: 'Stage 4: Interactive Discussion (12 min)', zh: '第四階段：互動討論 (12分鐘)' },
  'player.step5': { en: 'Stage 5: Quiet Integration (5 min)', zh: '第五階段：安靜整合 (5分鐘)' },
  'player.stepLabel1': { en: 'Life Questions', zh: '生活提問' },
  'player.stepLabel2': { en: 'Scriptures', zh: '經文對照' },
  'player.stepLabel3': { en: 'Tension', zh: '張力引導' },
  'player.stepLabel4': { en: 'Discussion', zh: '互動討論' },
  'player.stepLabel5': { en: 'Integration', zh: '安靜整合' },
  'player.wisdomQuote': { en: '"The beginning of wisdom is an honest look at the choices in life."', zh: '「智慧的起點在於誠實地面對生活中的選擇。」' },
  'player.submitButton': { en: 'Seek Inspiration & View Classmate Responses', zh: '尋求啟發並觀看同學回應' },
  'player.loading': { en: 'Compiling class data...', zh: '正在彙整課堂數據...' },
  'player.feedbackLabel': { en: '💡 Wisdom Mentor Feedback:', zh: '💡 智慧導師的回饋：' },
  'player.nextPerspectives': { en: 'Next: Three-Book Comparison', zh: '下一步：進入三方經文對照' },
  'player.back': { en: 'Back', zh: '返回' },
  'player.toTension': { en: 'Enter Tension Guide', zh: '進入張力引導' },
  'player.toDiscussion': { en: 'Group Discussion', zh: '小組互動討論' },
  'player.toSummary': { en: 'Final Reflection', zh: '最後沈思' },
  'player.textareaPlaceholder': { en: 'Write your thoughts here or click the microphone above...', zh: '在此寫下您的想法 or 點擊上方麥克風...' },
  'player.discussionPlaceholder': { en: 'Enter discussion notes or click microphone...', zh: '在此輸入討論記錄或點擊麥克風...' },
  'player.whatIsWisdom': { en: 'What is Wisdom?', zh: '什麼是智慧？' },
  'player.handleContradictions': { en: 'How to handle these contradictions?', zh: '如何處理這些矛盾？' },
  'player.biblicalWisdom': { en: '"Wisdom" in the Bible', zh: '聖經中「智慧」' },
  'player.writeForYourself': { en: 'Write a sentence for today\'s self:', zh: '寫下一句話給今天的自己：' },
  'player.summaryPlaceholder': { en: 'Type here or click voice button...', zh: '在此輸入或點擊語音按鈕...' },
  'player.completeLesson': { en: 'Complete This Lesson', zh: '完成本堂課' },
  'player.yes': { en: 'Yes', zh: '是' },
  'player.no': { en: 'No', zh: '不是' },
  'player.dontKnow': { en: "Don't know", zh: '不知道' },

  // AdminDashboard
  'admin.heading': { en: 'Before Class — Content Management', zh: '課前內容管理' },
  'admin.modulesTotal': { en: 'modules total', zh: '個模組' },
  'admin.addModule': { en: '+ Add Module', zh: '+ 新增模組' },
  'admin.colId': { en: '#', zh: '#' },
  'admin.colTitle': { en: 'Title', zh: '標題' },
  'admin.colSubtitle': { en: 'Subtitle', zh: '副標題' },
  'admin.colActions': { en: 'Actions', zh: '操作' },
  'admin.edit': { en: 'Edit', zh: '編輯' },
  'admin.delete': { en: 'Delete', zh: '刪除' },
  'admin.deleteConfirm': { en: 'Delete', zh: '刪除' },

  // ModuleEditor
  'editor.editModule': { en: 'Edit Module', zh: '編輯模組' },
  'editor.addModule': { en: 'Add New Module', zh: '新增模組' },
  'editor.title': { en: 'Title', zh: '標題' },
  'editor.subtitle': { en: 'Subtitle', zh: '副標題' },
  'editor.cycle': { en: 'Cycle', zh: '循環' },
  'editor.lifeQuestions': { en: 'Life Questions', zh: '生活提問' },
  'editor.addQuestion': { en: '+ Add Question', zh: '+ 新增問題' },
  'editor.theme': { en: 'Theme', zh: '主題' },
  'editor.description': { en: 'Description', zh: '描述' },
  'editor.tensionGuide': { en: 'Tension Guide', zh: '張力引導' },
  'editor.discussionPrompts': { en: 'Discussion Prompts', zh: '討論提示' },
  'editor.addPrompt': { en: '+ Add Prompt', zh: '+ 新增提示' },
  'editor.summary': { en: 'Summary', zh: '總結' },
  'editor.save': { en: 'Save Module', zh: '儲存模組' },
  'editor.cancel': { en: 'Cancel', zh: '取消' },

  // TeachingAssistant
  'ta.beforeClassLabel': { en: 'Wednesday', zh: 'Wednesday' },
  'ta.onClassLabel': { en: 'Wednesday', zh: 'Wednesday' },
  'ta.poweredBy': { en: 'Powered by GPT-5', zh: '由 GPT-5 驅動' },
  'ta.beforeClassEmpty1': { en: 'How can I help you prepare?', zh: '我可以幫你準備什麼？' },
  'ta.beforeClassEmpty2': { en: 'Ask me to help plan a lesson, suggest activities, or explain ethical concepts.', zh: '我可以幫你準備課程、建議活動或解釋倫理概念。' },
  'ta.onClassEmpty1': { en: "I'm here to help in class!", zh: '我在這裡幫助你上課！' },
  'ta.onClassEmpty2': { en: 'Ask me to explain a concept, provide examples, or guide a discussion.', zh: '我可以解釋概念、提供例子或引導討論。' },
  'ta.thinking': { en: 'Thinking...', zh: '思考中...' },
  'ta.beforeClassPlaceholder': { en: 'Ask about lesson prep...', zh: '問課程準備...' },
  'ta.onClassPlaceholder': { en: 'Ask a question...', zh: '提問...' },

  // ClassInsight
  'insight.heading': { en: "Class Observation: Everyone's Views", zh: '課堂觀察：大家的觀點' },
  'insight.wordCloudLabel': { en: 'Life Keywords Cloud', zh: '生活關鍵字雲' },
  'insight.wordCloudDesc': { en: 'Keywords mentioned by classmates about "things they spend time on in life":', zh: '同學在「生活中會花時間去做的事」中提到的關鍵字：' },
  'insight.beliefLabel': { en: 'Belief Distribution', zh: '信念分佈' },
  'insight.beliefDesc': { en: 'On "whether you consider yourself a seeker of wisdom":', zh: '對於「是否認為自己是尋找智慧的人」：' },
  'insight.yourChoice': { en: 'Your choice', zh: '您的選擇' },
  'insight.verse': { en: '"As iron sharpens iron, so one person sharpens another." — Proverbs 27:17', zh: '「鐵磨鐵，磨出刃來；朋友相感也是如此。」—— 箴言 27:17' },

  // AudioNarration
  'audio.play': { en: 'Play narration', zh: '播放朗讀' },
  'audio.stop': { en: 'Stop narration', zh: '停止朗讀' },
  'audio.replay': { en: 'Replay', zh: '重新播放' },
  'audio.label': { en: 'Voice', zh: '智慧語音' },

  // SpeechInput
  'speech.listening': { en: 'Listening... click to stop', zh: '正在聆聽...點擊停止' },
  'speech.clickToSpeak': { en: 'Click to use voice input', zh: '點擊使用語音輸入' },

  // WordCloud
  'wordCloud.empty': { en: 'Collecting classmate responses...', zh: '正在收集同學的回應中...' },

  // Sidebar
  'sidebar.content': { en: 'Content Management', zh: '內容管理' },
  'sidebar.wednesday': { en: 'Wednesday', zh: 'Wednesday' },
  'sidebar.studentWednesday': { en: 'Student & Wednesday', zh: '學生與Wednesday' },
  'sidebar.teacherStudents': { en: 'Teacher & Students', zh: '教師與學生' },
  'sidebar.progress': { en: 'Student Progress', zh: '學生進度' },
  'sidebar.analysis': { en: 'Analysis', zh: '分析' },
  'sidebar.assignments': { en: 'Assignments', zh: '作業' },

  // Placeholders
  'placeholder.comingSoon': { en: 'Coming Soon', zh: '即將推出' },
  'placeholder.studentWednesdayDesc': { en: 'View conversations between students and Wednesday AI assistant.', zh: '查看學生與Wednesday AI助手之間的對話。' },
  'placeholder.teacherStudentsDesc': { en: 'Interact with students during lessons.', zh: '在課堂中與學生互動。' },
  'placeholder.analysisDesc': { en: 'View analytics and insights about student learning.', zh: '查看學生學習分析和洞察。' },
  'placeholder.assignmentsDesc': { en: 'Create and manage student assignments.', zh: '創建和管理學生作業。' },

  // Student Progress
  'progress.title': { en: 'Student Progress', zh: '學生進度' },
  'progress.loading': { en: 'Loading progress data...', zh: '正在載入進度數據...' },
  'progress.noSupabase': { en: 'Please configure Supabase to view student progress.', zh: '請配置Supabase以查看學生進度。' },
  'progress.recordsTotal': { en: 'records', zh: '筆記錄' },
  'progress.empty': { en: 'No student progress recorded yet.', zh: '尚無學生進度記錄。' },
  'progress.colStudent': { en: 'Student', zh: '學生' },
  'progress.colModule': { en: 'Lesson', zh: '課程' },
  'progress.colStep': { en: 'Step', zh: '步驟' },
  'progress.colStatus': { en: 'Status', zh: '狀態' },
  'progress.colUpdated': { en: 'Updated', zh: '更新時間' },
  'progress.completed': { en: 'Completed', zh: '已完成' },
  'progress.inProgress': { en: 'In Progress', zh: '進行中' },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('ethics_explorer_lang');
    return (saved === 'zh' ? 'zh' : 'en') as Lang;
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('ethics_explorer_lang', newLang);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[key]?.[lang] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
