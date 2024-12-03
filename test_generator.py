from question_generator import QuestionGenerator

# Create an instance of the question generator
generator = QuestionGenerator()

# Your custom text
text = "Store, share, and collaborate
Developers can store their code in a "repository" on GitHub, where they can share it with others, track changes, and collaborate on projects 
Manage changes
GitHub provides tools to manage changes from multiple developers, so that changes don't impact each other's work 
Use Git
GitHub uses Git, an open source version control software that tracks changes to code and allows multiple people to work on the same project at the same time 
Use social coding
GitHub can be thought of as a social networking site for software developers, where they can collaborate on projects and review each other's code 
Use for other development
GitHub can be used for developing code, building web pages, updating content, and more 
GitHub was founded in 2008 and is headquartered in California. Microsoft acquired GitHub in 2018 for $7.5 billion. 
Some features of GitHub include: 
Repositories: Each repository contains all the files for a project, as well as the revision history for each file 
Collaboration: Developers can collaborate on projects without worrying that their changes will impact others' work 
Version control: GitHub provides distributed version control, which includes access control, bug tracking, and software feature requests 
Task management: GitHub provides tools for task management 
Continuous integration: GitHub provides continuous integration 
Wikis: GitHub provides wikis for every project "

# Generate questions
questions = generator.generate_from_text(text)

# Print the generated questions
print("Generated Questions:")
for i, question in enumerate(questions, 1):
    print(f"{i}. {question}")