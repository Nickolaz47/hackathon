const Formulario = () => {
  return (
    <div className="mt-md-4  container py-5  gradient-custom align-items-center p-3 bg-secondary">
      <h2 className="text-center title">Cadastrar</h2>
      <form>
        <table>
          <tr>
            <td colSpan={2}>
              <div className="form-group">
                <label>Nome*</label>
                <input className="form-control" placeholder="Nome" required />
              </div>{" "}
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <label for="exampleInputEmail1">E-mail*</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  required
                />
              </div>
            </td>

            <td>
              <div>
                <label for="exampleInputEmail1">Confirmar E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Confirmar Email"
                  required
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="form-group">
                <label for="exampleInputPassword1">Senha*</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Senha"
                  required
                />
              </div>
            </td>

            <td>
              <div>
                <label for="exampleInputPassword1">Confirmar Senha:</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirmar Senha"
                  required
                />
              </div>
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <div className="form-group">
                <label>Instituição:</label>
                <input className="form-control" placeholder="Instituição" />
              </div>{" "}
            </td>
          </tr>

          <tr>
            <td>
              <div class="form-check">
                <input
                  type="radio"
                  class="form-check-input"
                  id="radio1"
                  name="optradio"
                  value="option1"
                  checked
                />
                Mentor
                <label class="form-check-label" for="radio1"></label>
              </div>
            </td>

            <td>
              <div class="form-check">
                <input
                  type="radio"
                  class="form-check-input"
                  id="radio2"
                  name="optradio"
                  value="option2"
                />
                Estudante
                <label class="form-check-label" for="radio2"></label>
              </div>
            </td>
          </tr>

          <tr colSpan={2}>Áreas de Interesse:</tr>
          <tr>
            <td>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                />
                <label class="form-check-label">HTML</label>
              </div>
            </td>

            <td>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                />
                <label class="form-check-label">CSS</label>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                />
                <label class="form-check-label">Banco de Dados</label>
              </div>
            </td>

            <td>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                />
                <label class="form-check-label"> Node.js</label>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                />
                <label class="form-check-label">JavaScript</label>
              </div>
            </td>

            <td>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                />
                <label class="form-check-label">CSS</label>
              </div>
            </td>
          </tr>
        </table>

        <center className="center-layout">
          <button type="submit" className="btn btn-dark align-self-center">
            Efetuar cadastro
          </button>
        </center>
      </form>
    </div>
  );
};

export default Formulario;
