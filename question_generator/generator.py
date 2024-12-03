import random
from .templates import SUBJECTIVE_TEMPLATES, OBJECTIVE_TEMPLATES
from .utils import clean_text, extract_keywords

class QuestionGenerator:
    def __init__(self):
        self.subjective_templates = SUBJECTIVE_TEMPLATES
        self.objective_templates = OBJECTIVE_TEMPLATES

    def generate_from_text(self, text, question_type='both'):
        """
        Generate questions from a given text.
        
        Args:
            text (str): Input text to generate questions from
            question_type (str): Type of questions to generate ('subjective', 'objective', or 'both')
        """
        cleaned_text = clean_text(text)
        keywords = extract_keywords(cleaned_text)
        
        questions = []
        for keyword in keywords:
            if template := self._select_template(question_type):
                question = template.replace('[KEYWORD]', keyword)
                questions.append(question)
        
        return questions

    def _select_template(self, question_type):
        """Select a random template based on the question type."""
        if question_type == 'subjective':
            templates = self.subjective_templates
        elif question_type == 'objective':
            templates = self.objective_templates
        else:  # 'both'
            templates = self.subjective_templates + self.objective_templates
            
        return random.choice(templates) if templates else None