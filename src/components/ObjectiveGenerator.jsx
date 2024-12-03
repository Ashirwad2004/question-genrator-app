import React, { useState } from 'react';
import { generateQuestions } from '../utils/questionGenerator';

function ObjectiveGenerator() {
  const [inputText, setInputText] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleGenerateQuestions = () => {
    if (!inputText.trim()) return;
    const generatedQuestions = generateQuestions(inputText, 'objective');
    setQuestions(generatedQuestions);
  };

  return (
    <div>
      <div className="mb-6">
        <label 
          htmlFor="objective-input"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter your text for Objective Questions
        </label>
        <textarea
          id="objective-input"
          className="w-full h-40 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter the text to generate objective questions..."
        />
      </div>

      <button
        onClick={handleGenerateQuestions}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Generate Objective Questions
      </button>

      {questions.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Generated Objective Questions
          </h2>
          <ul className="space-y-3">
            {questions.map((question, index) => (
              <li 
                key={index}
                className="p-3 bg-gray-50 rounded-md"
              >
                {index + 1}. {question}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ObjectiveGenerator;