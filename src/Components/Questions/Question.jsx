import "./Question.css";
import { Link, useParams } from "react-router-dom";
import { useQuiz } from "../../context";
import Loader from "../../Components/Loader/Loader.js";
import { useState, useEffect } from "react";

export const Question = () => {
  const { selectedQuiz, answers, setAnswers } = useQuiz();
  const { selectedQuizData } = selectedQuiz;

  let { questionNumber } = useParams();

  questionNumber = Number(questionNumber);

  const [questionData, setQuestionData] = useState({});
  const quizId = selectedQuizData._id;

  const getQuestionData = () => {
    const requiredQuestion = selectedQuizData.questions[questionNumber];
    setQuestionData(requiredQuestion);
  };

  useEffect(() => {
    getQuestionData();
  }, [questionNumber, questionData]);

  return (
    <main className="container-main">
      {Object.keys(questionData).length === 0 && <Loader />}
      {Object.keys(questionData).length !== 0 && (
        <div className="container-question">
          <h4 className="quizTitle">{selectedQuizData.quizTitle}</h4>
          <div className="quizData">
            <p className="question-info">
              Question: <span>{Number(questionNumber) + 1}/5</span>
            </p>
            <p className="question-info">
              Points: <span>20</span>
            </p>
          </div>
          <p className="quizQuestion">{questionData.question}</p>
          <div className="container-option">
            <label
              htmlFor="option1"
              className={`${
                questionData.options[0] === answers[questionNumber]
                  ? "option-label option-selected"
                  : "option-label"
              }`}
            >
              {questionData.options[0]}
            </label>
            <input
              type="radio"
              id="option1"
              name="option"
              onClick={() =>
                setAnswers({
                  ...answers,
                  [questionNumber]: questionData.options[0],
                })
              }
            />

            <label
              htmlFor="option2"
              className={`${
                questionData.options[1] === answers[questionNumber]
                  ? "option-label option-selected"
                  : "option-label"
              }`}
            >
              {questionData.options[1]}
            </label>
            <input
              type="radio"
              id="option2"
              name="option"
              onClick={() =>
                setAnswers({
                  ...answers,
                  [questionNumber]: questionData.options[1],
                })
              }
            />

            <label
              htmlFor="option3"
              className={`${
                questionData.options[2] === answers[questionNumber]
                  ? "option-label option-selected"
                  : "option-label"
              }`}
            >
              {questionData.options[2]}
            </label>
            <input
              type="radio"
              id="option3"
              name="option"
              onClick={() =>
                setAnswers({
                  ...answers,
                  [questionNumber]: questionData.options[2],
                })
              }
            />

            <label
              htmlFor="option4"
              className={`${
                questionData.options[3] === answers[questionNumber]
                  ? "option-label option-selected"
                  : "option-label"
              }`}
            >
              {questionData.options[3]}
            </label>
            <input
              type="radio"
              id="option4"
              name="option"
              onClick={() =>
                setAnswers({
                  ...answers,
                  [questionNumber]: questionData.options[3],
                })
              }
            />
          </div>

          <div className="quizController">
            {Number(questionNumber) === 0 ? (
              <Link
                to={`/rules/${quizId}`}
                className="next-btn button button-controller"
              >
                Rules
              </Link>
            ) : (
              <Link
                to={`/question/${quizId}/${Number(questionNumber) - 1}`}
                className="next-btn button button-controller "
              >
                Previous
              </Link>
            )}
            {Number(questionNumber) + 1 ===
            selectedQuizData.questions.length ? (
              <Link
                to="/result"
                className={`${
                  answers[questionNumber] ? "" : "pointer-events-none"
                } next-btn button button-controller`}
              >
                Result
              </Link>
            ) : (
              <Link
                to={`/question/${quizId}/${Number(questionNumber) + 1}`}
                className={`${
                  answers[questionNumber] ? "" : "pointer-events-none"
                } next-btn button button-controller`}
              >
                Next
              </Link>
            )}
          </div>
        </div>
      )}
    </main>
  );
};
