import "./App.css";
import NavBar from "./Components/Header/NavBar";
import { Routes, Route } from "react-router-dom";

import { RequireAuth } from "./Components/ReqResAuth/RequireAuth";
import { RestrictAuth } from "./Components/ReqResAuth/RestrictAuth";

import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/Signup";
import { Question } from "./Components/Questions/Question.jsx";
import { Result } from "./Components/Result/Result.jsx";

import Home from "./Components/Home/Home.jsx";

import { Rules } from "./Components/Rules/Rules.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<RestrictAuth />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/rules/:quizId" element={<Rules />} />
          <Route
            path="/question/:quizId/:questionNumber"
            element={<Question />}
          />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
