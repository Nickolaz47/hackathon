// Hooks
import { useAuth } from "./hooks/useAuth";
import { useContext } from "react";
// Components
import Navbar from "./components/Navbar";
// Contexts
import { UserContext } from "./contexts/UserContext";
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
  const { user } = useContext(UserContext);
  const { loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          ></Route>
          <Route path="/mentorships" element={<Mentorships />}></Route>
          <Route path="/questions" element={<Questions />}></Route>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/dashboard" />}
          ></Route>
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/dashboard" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
