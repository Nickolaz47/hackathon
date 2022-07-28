const Login = () => {
  return (
    <div className="mt-md-4  container py-5  gradient-custom align-items-center p-3 bg-secondary">
      <h2 className="text-center title">Efetuar Login</h2>
      <form>
        <table>
          <tr>
            <td colSpan={2}>
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
          </tr>
          <td colSpan={2}>
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
        </table>

        <center className="center-layout">
          <button type="submit" className="btn btn-dark align-self-center">
            Efetuar Login
          </button>
        </center>
      </form>
    </div>
  );
};

export default Login;
