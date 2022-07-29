import { useState } from "react";
import subjectOptions from "../data/subjectOptions.json"

const Profile = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");
  const [subject, setSubject] = useState("");
  const [institution, setInstitution] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <h2 className="text-center title">Edite seus dados</h2>
      <form className="row mb-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Senha"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Instituição</label>
          <input
            type="text"
            className="form-control"
            placeholder="Instituição"
            value={institution || ""}
            onChange={(e) => setInstitution(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Qual o seu perfil?</label>
          <br />
          <div className="text-center">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radioOption"
                id="studentRadio"
                value="student"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label">Estudante</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radioOption"
                id="mentorRadio"
                value="mentor"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label">Mentor</label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">
            Escolha o tema que deseja aprender ou mentorar:
          </label>
          <select
            className="form-select"
            onChange={(e) => setSubject(e.target.value)}
          >
            {subjectOptions.map(({ name, value }, idx) => (
              <option key={idx} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Profile;
