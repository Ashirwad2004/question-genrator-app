from question_generator import QuestionGenerator

def main():
    # Create an instance of the question generator
    generator = QuestionGenerator()
    
    # Example text
    sample_text = """
    Python is a high-level programming language known for its simplicity and readability. 
    It supports multiple programming paradigms including procedural, object-oriented, and 
    functional programming. Python's extensive standard library and rich ecosystem of 
    third-party packages make it suitable for various applications, from web development 
    to data science and artificial intelligence.
    """
    
    # Generate both types of questions
    print("\nSubjective Questions:")
    subjective_questions = generator.generate_from_text(sample_text, 'subjective')
    for i, question in enumerate(subjective_questions, 1):
        print(f"{i}. {question}")
        
    print("\nObjective Questions:")
    objective_questions = generator.generate_from_text(sample_text, 'objective')
    for i, question in enumerate(objective_questions, 1):
        print(f"{i}. {question}")

if __name__ == "__main__":
    main()