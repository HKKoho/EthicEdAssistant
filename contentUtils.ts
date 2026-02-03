
/**
 * Splits bilingual text (English followed by Chinese) and returns the portion
 * matching the selected language.
 *
 * The content in constants.ts follows the pattern "English text 中文文字".
 * We detect the boundary where ASCII/Latin text transitions to CJK characters.
 *
 * For perspective descriptions that contain inline Chinese terms within English
 * explanations (e.g. "(儒家)", "(仁)"), we keep the full text in both modes
 * since the Chinese terms are integral to the English explanation.
 */
export function splitBilingual(text: string, lang: 'en' | 'zh'): string {
  if (!text) return text;

  // For multi-line/long text (perspective descriptions, tension guides), return as-is
  // because Chinese terms are embedded in English explanations
  if (text.includes('\n') && text.length > 200) {
    return text;
  }

  // Try to find the split point: look for a CJK block that goes to the end
  // Pattern: "English text 中文文字" or "English text 中文文字 (Coming Soon)"
  // We look for the first CJK character that starts a "Chinese section" (not an inline term in parentheses)

  // Strategy: find last contiguous ASCII-start segment and first contiguous CJK-start segment
  // For titles like "Lesson 1 | What Is Right and Wrong? 什麼是對與錯？"
  // or "Honesty 誠實"

  // Simple heuristic: find the first CJK character that is NOT inside parentheses
  // and is preceded by a space (boundary between EN and ZH sections)
  const cjkRegex = /[\u4e00-\u9fff\u3400-\u4dbf]/;

  // Find the split: space followed by CJK char not inside parens
  let splitIndex = -1;
  let parenDepth = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '(' || text[i] === '（') parenDepth++;
    else if (text[i] === ')' || text[i] === '）') parenDepth--;

    if (parenDepth === 0 && cjkRegex.test(text[i])) {
      // Check if this CJK char is preceded by a space (not inline)
      if (i > 0 && text[i - 1] === ' ') {
        splitIndex = i;
        break;
      }
    }
  }

  if (splitIndex === -1) {
    // No clear split found — return the whole text
    return text;
  }

  if (lang === 'en') {
    return text.substring(0, splitIndex).trim();
  } else {
    return text.substring(splitIndex).trim();
  }
}
