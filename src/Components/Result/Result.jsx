import "./Result.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context";
import Loader from "../../Components/Loader/Loader.js";

const [ResultTrophy, oops, goodtry] = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAvo6VH-w7wMQQMdaDD6upf6T-sHjV01c_g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vUJIMuTSu1-bVDsm7ziAgNMVRlgkkzlB0w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1bdzzfygktOPc3His2eQIIVcLtf7Xjcsiw&usqp=CAU",
];

export const Result = () => {
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const { selectedQuiz, answers, setAnswers, score, setScore } = useQuiz();
  const { selectedQuizData, selectedQuizLoading } = selectedQuiz;

  useEffect(() => {
    const rightAnswers = selectedQuizData.questions.map(
      (question) => question.answer
    );
    setCorrectAnswers(rightAnswers);
    for (let i = 0; i < rightAnswers.length; i++) {
      if (rightAnswers[i] === answers[i]) setScore((prev) => Number(prev) + 1);
    }
  }, []);

  const finishHandler = () => {
    setScore(0);
    setAnswers([]);
  };

  return (
    <main className="container-main">
      {correctAnswers.length === 0 && <Loader />}
      {correctAnswers.length !== 0 && (
        <div className="container-question">
          <Link
            to="/"
            onClick={finishHandler}
            className="finish-btn button button-controller"
          >
            Finish
          </Link>
          <h3 className="result-header">Results</h3>
          {Number(score) >= 4 && (
            <>
              <img
                className="prize-img"
                src={ResultTrophy}
                alt="result-trophy"
              />
              <div>Congratulations!!!!</div>
            </>
          )}
          {Number(score) === 3 && (
            <>
              <img className="prize-img" src={goodtry} alt="goodtry" />
              <div>Good Try!!!!</div>
            </>
          )}
          {Number(score) <= 2 && (
            <>
              <img className="prize-img" src={oops} alt="oops" />
              <div>Better Luck Next Time!!!</div>
            </>
          )}
          <p className="final-score-info text-lg font-semibold">
            Final Score: <span>{score * 20}/100</span>
          </p>
          {selectedQuizLoading && <Loader />}
          {!selectedQuizLoading &&
            selectedQuizData.questions.map((question, questionNumber) => {
              return (
                <div className="result-container " key={question._id}>
                  <p className="questionMain">{question.question}</p>
                  <ul className="option-container ">
                    {question.options.map((option, index) => {
                      return option === answers[questionNumber] &&
                        option === correctAnswers[questionNumber] ? (
                        <li
                          key={index}
                          className="option-label-result correct-ans"
                        >
                          {option}
                        </li>
                      ) : option === answers[questionNumber] ? (
                        <li
                          key={index}
                          className="option-label-result wrong-ans"
                        >
                          {option}
                        </li>
                      ) : option === correctAnswers[questionNumber] ? (
                        <li
                          key={index}
                          className="option-label-result correct-ans"
                        >
                          {option}
                        </li>
                      ) : (
                        <li key={index} className="option-label-result">
                          {option}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
      )}
    </main>
  );
};
