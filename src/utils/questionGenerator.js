import { SUBJECTIVE_TEMPLATES, OBJECTIVE_TEMPLATES } from './templates';
import { cleanText, extractKeywords } from './utils';

export function generateQuestions(text, questionType = 'both') {
  const cleaned = cleanText(text);
  const keywords = extractKeywords(cleaned);
  
  const questions = [];
  for (const keyword of keywords) {
    const template = selectTemplate(questionType);
    if (template) {
      const question = template.replace('[KEYWORD]', keyword);
      questions.push(question);
    }
  }
  
  return questions;
}

function selectTemplate(questionType) {
  let templates;
  
  switch (questionType) {
    case 'subjective':
      templates = SUBJECTIVE_TEMPLATES;
      break;
    case 'objective':
      templates = OBJECTIVE_TEMPLATES;
      break;
    default:
      templates = [...SUBJECTIVE_TEMPLATES, ...OBJECTIVE_TEMPLATES];
  }
  
  return templates[Math.floor(Math.random() * templates.length)];
}