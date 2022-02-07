import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Shortened from "./components/shortened";
import Login from "./components/login";
import SignUp from "./components/signUp";
import ForgotPass from "./components/forgotPass";
import History from "./components/history";
import Home_loggedin from "./components/home-loggedin";
import Page_not_found from "./components/page-not-found";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortened" element={<Shortened />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />∑
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/history" element={<History />} />
        <Route path="/home-loggedin" element={<Home_loggedin />} />
        <Route path="*" element={<Page_not_found />} />
      </Routes>
    </Router>
  );
}

export default App;
