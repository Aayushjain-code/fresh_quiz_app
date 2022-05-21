import "./Rules.css";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";
import Loader from "../../Components/Loader/Loader.js";

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
        <article className="rules-container flex flex-column flex-align-center m-2">
          <h3 className="rules-header m-2">
            {selectedQuizData.title} Rules, read them carefully!!!
          </h3>
          <ul className="no-bullets flex flex-column flex-gap-1">
            {RulesData.map((rule, index) => (
              <li key={index} className="text-lg">
                <i className="fa fa-hand-o-right" aria-hidden="true"></i>{" "}
                {rule.description}
              </li>
            ))}
          </ul>
          <Link
            to={`/question/${quizId}/${0}`}
            className="flex flex-justify-center flex-align-center btn-solid btn-medium mt-2"
          >
            Start Quiz
          </Link>
        </article>
      )}
    </main>
  );
};
