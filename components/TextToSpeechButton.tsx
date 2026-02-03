
import React, { useState, useRef, useEffect } from 'react';
import { generateSpeech } from '../services/geminiService';
import { useLanguage } from '../i18n';

interface TextToSpeechButtonProps {
  text: string;
  className?: string;
}

const TextToSpeechButton: React.FC<TextToSpeechButtonProps> = ({ text, className = '' }) => {
  const { lang, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  const stopAudio = () => {
    if (sourceRef.current) {
      try { sourceRef.current.stop(); } catch { /* ignore */ }
      sourceRef.current = null;
    }
    setIsPlaying(false);
  };

  const play = async () => {
    if (isPlaying) {
      stopAudio();
      return;
    }

    if (!audioBufferRef.current) {
      setIsLoading(true);
      const base64Audio = await generateSpeech(text, lang);
      if (base64Audio) {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        const binaryString = atob(base64Audio);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
        const dataInt16 = new Int16Array(bytes.buffer);
        const frameCount = dataInt16.length;
        const buffer = audioContextRef.current.createBuffer(1, frameCount, 24000);
        const channelData = buffer.getChannelData(0);
        for (let i = 0; i < frameCount; i++) channelData[i] = dataInt16[i] / 32768.0;
        audioBufferRef.current = buffer;
      }
      setIsLoading(false);
    }

    if (audioBufferRef.current && audioContextRef.current) {
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBufferRef.current;
      source.connect(audioContextRef.current.destination);
      source.onended = () => { setIsPlaying(false); sourceRef.current = null; };
      source.start();
      sourceRef.current = source;
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => stopAudio();
  }, []);

  useEffect(() => {
    stopAudio();
    audioBufferRef.current = null;
  }, [text]);

  return (
    <button
      type="button"
      onClick={play}
      disabled={isLoading}
      className={`inline-flex items-center justify-center w-7 h-7 rounded-full transition-all ${
        isPlaying
          ? 'bg-orange-500 text-white'
          : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
      } ${isLoading ? 'opacity-50' : 'hover:scale-105 active:scale-95'} ${className}`}
      title={isPlaying ? t('audio.stop') : t('audio.play')}
    >
      {isLoading ? (
        <div className="w-3.5 h-3.5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
      ) : isPlaying ? (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
      ) : (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
      )}
    </button>
  );
};

export default TextToSpeechButton;
