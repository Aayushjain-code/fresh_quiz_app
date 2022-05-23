import { createContext, useContext, useState } from "react";
import axios from "axios";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState({
    quizzesData: [],
    quizzesLoading: false,
  });
  const [selectedQuiz, setSelectedQuiz] = useState({
    selectedQuizData: {},
    selectedQuizLoading: false,
  });
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const getAllQuizzes = async () => {
    setQuizzes({ ...quizzes, quizzesLoading: true });
    try {
      const response = await axios.get("/api/quizzes");
      if (response.status === 200) {
        setQuizzes({
          quizzesData: response.data.quizzes,
          quizzesLoading: false,
        });
      }
    } catch (error) {
      console.error(error);
      setQuizzes({ ...quizzes, quizzesLoading: false });
    }
  };

  const getCategoryData = async (_id) => {
    setSelectedQuiz({ ...selectedQuiz, selectedQuizLoading: true });
    try {
      const response = await axios.get(`/api/quizzes/${_id}`);
      if (response.status === 200) {
        setSelectedQuiz({
          selectedQuizData: response.data.quiz,
          selectedQuizLoading: false,
        });
      }
    } catch (error) {
      console.error(error);
      setSelectedQuiz({ ...selectedQuiz, selectedQuizLoading: false });
    }
  };

  return (
    <QuizContext.Provider
      value={{
        getAllQuizzes,
        getCategoryData,
        quizzes,
        selectedQuiz,
        answers,
        setAnswers,
        score,
        setScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
