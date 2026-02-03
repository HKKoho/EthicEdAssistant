
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n';
import SpeechInputButton from './SpeechInputButton';
import TextToSpeechButton from './TextToSpeechButton';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface TeachingAssistantProps {
  mode: 'before-class' | 'on-class';
  onClose: () => void;
  inline?: boolean;
}

const getSystemPrompt = (mode: string, lang: 'en' | 'zh'): string => {
  const langInstruction = lang === 'en'
    ? 'You MUST respond ONLY in English. Do not use Chinese in your responses.'
    : 'You MUST respond ONLY in Traditional Chinese (繁體中文). Do not use English in your responses.';

  const prompts: Record<string, string> = {
    'before-class': `You are Wednesday, an AI teaching assistant for a Grade 7-9 Christian Ethics course. You help teachers PREPARE lessons before class.

Your role:
- Help teachers plan engaging ethics lessons based on three frameworks: Virtue Ethics (德性倫理), Duty Ethics (義務倫理), and Consequentialism (後果倫理)
- Suggest discussion questions, real-life scenarios, and classroom activities
- Provide background on ethical traditions (Christian, Confucian, Buddhist, secular)
- Help adapt lesson content for different student levels
- Suggest ways to handle sensitive ethical topics in the classroom

${langInstruction}

Be practical, concise, and pedagogically sound.`,

    'on-class': `You are Wednesday, a friendly AI teaching assistant helping during a Grade 7-9 Christian Ethics class. You support LIVE classroom learning.

Your role:
- Help explain ethical concepts in simple, age-appropriate language
- Guide students through ethical dilemmas using three lenses: Virtue Ethics (德性倫理), Duty Ethics (義務倫理), and Consequentialism (後果倫理)
- Encourage critical thinking — don't give "correct answers" but help students reason through issues
- Use relatable examples for teenagers
- Keep responses concise and engaging for a classroom setting

${langInstruction}

Be warm, encouraging, and Socratic in your approach.`
  };

  return prompts[mode];
};

const TeachingAssistant: React.FC<TeachingAssistantProps> = ({ mode, onClose, inline = false }) => {
  const { lang, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSpeechTranscript = (transcript: string) => {
    setInput(prev => prev ? `${prev} ${transcript}` : transcript);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        setMessages([...updatedMessages, { role: 'assistant', content: 'OpenAI API key not configured. Please add OPENAI_API_KEY to your .env file.' }]);
        setIsLoading(false);
        return;
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'system', content: getSystemPrompt(mode, lang) },
            ...updatedMessages.map(m => ({ role: m.role, content: m.content })),
          ],
          max_tokens: 1024,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      if (data.error) {
        setMessages([...updatedMessages, { role: 'assistant', content: `Error: ${data.error.message}` }]);
      } else {
        const reply = data.choices?.[0]?.message?.content || 'No response received.';
        setMessages([...updatedMessages, { role: 'assistant', content: reply }]);
      }
    } catch (err: any) {
      setMessages([...updatedMessages, { role: 'assistant', content: `Connection error: ${err.message}` }]);
    }

    setIsLoading(false);
  };

  const modeLabel = mode === 'before-class' ? t('ta.beforeClassLabel') : t('ta.onClassLabel');
  const modeColor = mode === 'before-class' ? 'bg-slate-800' : 'bg-orange-500';

  const wrapperClass = inline
    ? 'flex flex-col h-full'
    : 'fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40';
  const containerClass = inline
    ? 'bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col flex-1'
    : 'bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col';
  const containerStyle = inline ? {} : { height: '80vh', maxHeight: '700px' };

  return (
    <div className={wrapperClass}>
      <div className={containerClass} style={containerStyle}>
        {/* Header */}
        <div className={`${modeColor} text-white px-5 py-4 ${inline ? 'rounded-t-2xl' : 'rounded-t-2xl'} flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z" />
                <circle cx="9.5" cy="10" r="1" fill="currentColor" />
                <circle cx="14.5" cy="10" r="1" fill="currentColor" />
                <path d="M9.5 14a3 3 0 0 0 5 0" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm">{modeLabel}</h3>
              <p className="text-xs opacity-75">{t('ta.poweredBy')}</p>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-white/20 rounded-lg p-1.5 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.length === 0 && (
            <div className="text-center text-slate-400 text-sm mt-8 space-y-2">
              <p className="text-3xl">🤖</p>
              {mode === 'before-class' ? (
                <>
                  <p className="font-medium text-slate-600">{t('ta.beforeClassEmpty1')}</p>
                  <p>{t('ta.beforeClassEmpty2')}</p>
                </>
              ) : (
                <>
                  <p className="font-medium text-slate-600">{t('ta.onClassEmpty1')}</p>
                  <p>{t('ta.onClassEmpty2')}</p>
                </>
              )}
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className="flex flex-col gap-1 max-w-[80%]">
                <div className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-orange-500 text-white rounded-br-md'
                    : 'bg-slate-100 text-slate-700 rounded-bl-md'
                }`}>
                  {msg.content}
                </div>
                {msg.role === 'assistant' && (
                  <div className="flex items-center gap-1 ml-1">
                    <TextToSpeechButton text={msg.content} />
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 rounded-2xl rounded-bl-md px-4 py-3 text-slate-400 text-sm">
                <span className="animate-pulse">{t('ta.thinking')}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={sendMessage} className="px-4 py-3 border-t border-slate-100 flex gap-2 items-center">
          <SpeechInputButton onTranscript={handleSpeechTranscript} />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={mode === 'before-class' ? t('ta.beforeClassPlaceholder') : t('ta.onClassPlaceholder')}
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-0 outline-none text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-orange-500 text-white px-4 py-2.5 rounded-xl font-bold hover:bg-orange-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeachingAssistant;
