// Hooks
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
// Components
import Message from "../../components/Message";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCredentials = { email, password };
    await login(userCredentials);
  };

  return (
    <div className="container">
      <h2 className="text-center title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">E-mail</label>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="E-mail"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="form-label">Senha</label>
        <input
          type="password"
          className="form-control"
          placeholder="Senha"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="mx-auto text-center my-3">
          {!loading && (
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          )}
          {loading && (
            <button className="btn btn-primary" type="submit" disabled>
              Logando...
            </button>
          )}
          {error && <Message msg={error} type="error" />}
        </div>
      </form>
      <p className="text-center">
        Não tem uma conta? <Link to="/register">Clique aqui</Link>
      </p>
    </div>
  );
};

export default Login;
