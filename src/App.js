import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import NavBar from "./Components/Header/NavBar";

import { RequireAuth } from "./Components/ReqResAuth/RequireAuth";
import { RestrictAuth } from "./Components/ReqResAuth/RestrictAuth";

import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/Signup";

import { Rules } from "./Pages/Rules/Rules";

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
