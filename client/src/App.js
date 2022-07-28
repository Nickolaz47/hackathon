// Hooks
// Components
import Navbar from "./components/Navbar";
// Pages
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
