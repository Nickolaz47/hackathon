import { useState } from "react";

const Dashboard = () => {
  const [menuOption, setMenuOption] = useState("profile");

  return (
    <div className="container">
      <div className="row">
        <aside className="col-md-3 btn-group-vertical my-1">
          <button
            className="btn btn-dark btn-lg"
            value="profile"
            onClick={(e) => setMenuOption(e.target.value)}
          >
            Perfil
          </button>
          <button
            className="btn btn-dark btn-lg"
            value="mentorships"
            onClick={(e) => setMenuOption(e.target.value)}
          >
            Mentorias
          </button>
          <button
            className="btn btn-dark btn-lg"
            value="questions"
            onClick={(e) => setMenuOption(e.target.value)}
          >
            Perguntas
          </button>
          <button
            className="btn btn-dark btn-lg"
            value="answers"
            onClick={(e) => setMenuOption(e.target.value)}
          >
            Respostas
          </button>
        </aside>
        <div className="col-md-9">
          {}
          {}
          {}
          {}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
