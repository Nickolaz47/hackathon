const Register = () => {
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
  };

  return (
    <div className="container">
      <h2 className="text-center title">Cadastro</h2>
      <form className="row mb-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" placeholder="Nome" />
        </div>
        <div className="col-md-6">
          <label className="form-label">E-mail</label>
          <input type="email" className="form-control" placeholder="E-mail" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Confirme o e-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="Confirme o e-mail"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Senha</label>
          <input type="password" className="form-control" placeholder="Senha" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Confirme a senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirme a senha"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Qual o seu perfil?</label>
          <br />
          <div className="text-center">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="radioOption"
                id="studentRadio"
                value="student"
                checked
              />
              <label class="form-check-label">Estudante</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="radioOption"
                id="mentorRadio"
                value="mentor"
              />
              <label class="form-check-label">Mentor</label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Escolha o tema de interesse:</label>
          <select class="form-select" aria-label="Default select example">
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
