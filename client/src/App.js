// Hooks
// Components
import Formulario from "./components/Form";
// Pages
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";
// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// CSS
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" component={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Formulario />
      <Login />
    </div>
  );
};

export default App;
