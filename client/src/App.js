// Hooks
// Components
import Navbar from "./components/Navbar";
// Pages
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Mentorships from "./pages/Mentorships/Mentorships";
import Questions from "./pages/Questions/Questions";
import Dashboard from "./pages/Dashboard/Dashboard";
// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// CSS
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/mentorships" element={<Mentorships />}></Route>
          <Route path="/questions" element={<Questions />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
