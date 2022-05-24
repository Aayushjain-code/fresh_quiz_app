import "./Rules.css";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";
import Loader from "../Loader/Loader.js";

const RulesData = [
  {
    description: "There will be 5 questions",
  },

  {
    description: "Each right answer scores 10 Points",
  },

  {
    description: "Each multiple choice question has only one correct answer",
  },

  {
    description: "To win the quiz you need to score more than 70%",
  },
];

export const Rules = () => {
  const { quizId } = useParams();
  const { getCategoryData, selectedQuiz } = useQuiz();
  const { selectedQuizLoading, selectedQuizData } = selectedQuiz;

  useEffect(() => {
    getCategoryData(quizId);
  }, [quizId]);

  return (
    <main className="flex-grow-1">
      {selectedQuizLoading && <Loader />}

      {!selectedQuizLoading && (
        <article className="rules-container ">
          <h3 className="rules-header m-2">
            {selectedQuizData.title} Rules, read them carefully!!!
          </h3>
          <div class="component-display-container">
            <div class="grid-3-column-layout">
              <div></div>
              <div>
                <ul className="no-bullets flex flex-column ">
                  {RulesData.map((rule, index) => (
                    <li key={index} class="alert primary-alert">
                      {rule.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div></div>
            </div>
          </div>
          <Link className="button-start" to={`/question/${quizId}/${0}`}>
            Start Quiz
          </Link>
        </article>
      )}
    </main>
  );
};
