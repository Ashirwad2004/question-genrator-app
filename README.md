# Question Generator

A powerful tool that automatically generates relevant questions from any given text. This project consists of both a Python backend for question generation logic and a React frontend for a user-friendly interface.

## Features

- Automatic question generation from input text
- Clean and modern user interface
- Real-time question generation
- Keyword extraction and processing
- Multiple question templates for variety
- Responsive design that works on all devices

## Project Structure

```
├── Python Backend/
│   ├── question_generator/
│   │   ├── __init__.py
│   │   ├── generator.py
│   │   ├── templates.py
│   │   └── utils.py
│   ├── main.py
│   └── test_generator.py
│
├── React Frontend/
│   ├── src/
│   │   ├── utils/
│   │   │   ├── questionGenerator.js
│   │   │   ├── templates.js
│   │   │   └── utils.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
```

## Getting Started

### Running the Python Backend

1. Make sure you have Python 3.x installed
2. Navigate to the project directory
3. Run the main script:
   ```bash
   python main.py
   ```

For testing with custom text:
```bash
python test_generator.py
```

### Running the React Frontend

1. Make sure you have Node.js installed
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the provided local URL

## How It Works

### Backend Logic

1. **Text Cleaning**: Removes punctuation, converts to lowercase, and normalizes whitespace
2. **Keyword Extraction**: Identifies important words while filtering out common stop words
3. **Question Generation**: Uses templates to create relevant questions based on extracted keywords

### Frontend Implementation

1. **User Input**: Accepts text through a textarea component
2. **Processing**: Utilizes the same logic as the Python backend, implemented in JavaScript
3. **Display**: Shows generated questions in a clean, organized list format

## Technologies Used

- **Backend**:
  - Python 3.x
  - Custom text processing algorithms

- **Frontend**:
  - React 18
  - Vite
  - Tailwind CSS
  - PostCSS
  - Modern JavaScript (ES6+)

## Customization

### Adding New Question Templates

Add new templates in either:
- `question_generator/templates.py` (Python)
- `src/utils/templates.js` (React)

### Modifying Keyword Extraction

Adjust the keyword extraction logic in:
- `question_generator/utils.py` (Python)
- `src/utils/utils.js` (React)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Author

Created by Ashirwad

## Acknowledgments

- Thanks to all contributors who have helped shape this project
- Inspired by educational tools and the need for automated question generation
- Built with modern web technologies and best practices