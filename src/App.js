import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Header/NavBar";

import { RequireAuth } from "./Components/ReqResAuth/RequireAuth";
import { RestrictAuth } from "./Components/ReqResAuth/RestrictAuth";

import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/Signup";

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
