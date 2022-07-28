import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [institution, setInstitution] = useState("");
  const [role, setRole] = useState("");
  const [subject, setSubject] = useState("");

  const subjectOptions = [
    { name: "Escolha o tema", value: undefined },
    { name: "HTML", value: "html" },
    { name: "JavaScript", value: "javascript" },
    { name: "React", value: "react" },
    { name: "NodeJS", value: "nodejs" },
    { name: "Python", value: "python" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      confirmEmail,
      password,
      confirmPassword,
      institution,
      role,
      subject,
    };
    console.log(newUser);
  };

  return (
    <div className="container">
      <h2 className="text-center title">Cadastro</h2>
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
          <label className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Confirme o e-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="Confirme o e-mail"
            value={confirmEmail || ""}
            onChange={(e) => setConfirmEmail(e.target.value)}
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
          <label className="form-label">Confirme a senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirme a senha"
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        <div className="text-center mt-3">
          <button className="btn btn-primary" type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
