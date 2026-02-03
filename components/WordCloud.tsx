
import React, { useMemo } from 'react';
import { useLanguage } from '../i18n';

interface WordCloudProps {
  words: string[];
  className?: string;
}

const WordCloud: React.FC<WordCloudProps> = ({ words, className = "" }) => {
  const { t } = useLanguage();

  const processedWords = useMemo(() => {
    const freqMap: Record<string, number> = {};

    words.forEach(input => {
      const tokens = input.split(/[，。？！\s、；]/).filter(t => t.length > 1);
      tokens.forEach(token => {
        freqMap[token] = (freqMap[token] || 0) + 1;
      });
    });

    const entries = Object.entries(freqMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20);

    if (entries.length === 0) return [];

    const max = entries[0][1];
    const min = entries[entries.length - 1][1];
    const range = max - min || 1;

    return entries.map(([text, count]) => ({
      text,
      size: 0.8 + ((count - min) / range) * 1.5,
      opacity: 0.5 + ((count - min) / range) * 0.5,
      color: [
        'text-amber-600', 'text-slate-700', 'text-blue-600',
        'text-amber-800', 'text-slate-500', 'text-emerald-600'
      ][Math.floor(Math.random() * 6)]
    }));
  }, [words]);

  if (processedWords.length === 0) {
    return <div className="text-slate-400 italic py-8">{t('wordCloud.empty')}</div>;
  }

  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 p-6 bg-white/50 rounded-3xl border border-slate-100 ${className}`}>
      {processedWords.map((word, i) => (
        <span
          key={i}
          className={`${word.color} font-bold transition-all hover:scale-110 cursor-default`}
          style={{
            fontSize: `${word.size}rem`,
            opacity: word.opacity
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
};

export default WordCloud;
