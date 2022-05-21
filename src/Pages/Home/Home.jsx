import { useEffect } from "react";
import "./home.css";
import FeaturedCard from "./FeaturedCard";
import { useQuiz } from "../../context/QuizContext";
import Loader from "../../Components/Loader/Loader.js";

const Home = () => {
  const { getAllQuizzes, quizzes } = useQuiz();
  const { quizzesData, quizzesLoading } = quizzes;

  useEffect(() => {
    getAllQuizzes();
  }, []);

  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>Fell the freshness</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. alias eos
            facilis, ipsa est asperiores repellendus!
          </p>
          <button
            className="button btn-success"
            // onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>
      </section>
      <section className="category" id="category">
        <div className="category">
          <h1 className="heading"> Featured Categories </h1>

          <div className="box-container">
            {quizzesLoading && <Loader />}
            {quizzesData.map((item) => {
              return (
                <>
                  <FeaturedCard item={item} key={item._id} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
