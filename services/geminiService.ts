
import { GoogleGenAI, Modality } from "@google/genai";
import { Module } from "../types";

export const getWisdomAssistantResponse = async (
  module: Module,
  userQuestion: string,
  userInput: string
) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const systemInstruction = `
    You are a thoughtful ethics teaching assistant for a Grade 7-9 Christian Ethics course in a cosmopolitan, multi-religious context.
    The current lesson is: ${module.title} (${module.subtitle}).
    Your task is to respond to student reflections with insights that draw on the three ethical frameworks used in this course:
    - Virtue Ethics (德性倫理): focuses on character — what kind of person should I become?
    - Duty Ethics (義務倫理): focuses on principles and rules — what is my moral obligation?
    - Consequentialism (後果倫理): focuses on outcomes — what produces the best result?

    Guidelines:
    - Be inclusive of multiple religious and cultural perspectives (Christian, Confucian, Buddhist, Islamic, secular, etc.)
    - Use bilingual style: primarily English with key Chinese terms in parentheses where helpful
    - Be warm, encouraging, and age-appropriate for 12-15 year old students
    - Avoid being dogmatic; encourage critical thinking
    - Keep responses around 150-200 words
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Lesson question: ${userQuestion}\nStudent's response: ${userInput}\nPlease provide thoughtful, encouraging feedback that helps the student think more deeply.`,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Great reflection! Take a moment to consider how the three ethical lenses — virtue, duty, and consequence — might each respond to your thoughts. 好的反思！花一點時間想想三個倫理視角會如何回應你的想法。";
  }
};

/**
 * Generates audio narration for a given text using gemini-2.5-flash-preview-tts
 * Returns base64 encoded PCM data.
 */
export const generateSpeech = async (text: string, lang: 'en' | 'zh' = 'en'): Promise<string | undefined> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const langPrompt = lang === 'en'
    ? `Please read the following content ONLY in English, in a warm, clear, and encouraging tone suitable for students. Ignore any Chinese characters and do not read them: ${text}`
    : `請用繁體中文朗讀以下內容，語氣溫暖、清晰、鼓勵，適合學生聆聽。忽略所有英文內容，只朗讀中文部分: ${text}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: langPrompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: lang === 'en' ? 'Kore' : 'Kore' },
          },
        },
      },
    });

    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  } catch (error) {
    console.error("TTS Generation Error:", error);
    return undefined;
  }
};
