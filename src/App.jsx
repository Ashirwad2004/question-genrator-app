import React, { useState } from 'react';
import SubjectiveGenerator from './components/SubjectiveGenerator';
import ObjectiveGenerator from './components/ObjectiveGenerator';

const App = () => {
  const [activeTab, setActiveTab] = useState('subjective');

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Question Generator
          </h1>
          <p className="text-lg text-gray-600">
            Made by Ashirwad
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 px-6 text-lg font-medium focus:outline-none ${
                activeTab === 'subjective'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('subjective')}
            >
              Subjective Questions
            </button>
            <button
              className={`flex-1 py-4 px-6 text-lg font-medium focus:outline-none ${
                activeTab === 'objective'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('objective')}
            >
              Objective Questions
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'subjective' ? (
              <SubjectiveGenerator />
            ) : (
              <ObjectiveGenerator />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;