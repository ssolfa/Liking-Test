import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState({
    quiz1: '',
    quiz2: '',
    quiz3: '',
    quiz4: '',
  });

  const setQuizItem = (quizId, item) => {
    setSelectedItem(prevItems => ({
      ...prevItems,
      [quizId]: item
    }));
  };

  return (
    <QuizContext.Provider value={{ selectedItem, setQuizItem }}>
      {children}
    </QuizContext.Provider>
  );
};
