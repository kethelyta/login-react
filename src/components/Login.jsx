import { FaUser, FaLock } from "react-icons/fa"; 
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Enviando os dados: ${username} - ${password} - Lembrar? ${rememberMe}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="logo-container">
          <h1>Login</h1>
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <FaUser className="icon" />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <FaLock className="icon" />
        </div>

        <div className="reacall-forget">
          <label className="remember-me">
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)} 
            />
            Lembre-se de mim
          </label>
        </div>

        <button type="submit">Entrar</button>

        <a href="#" className="forgot-password-link">Esqueci minha senha</a>

        <div className="register-link">
          <p>
            Não tem uma conta?
            <a href="#"> Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
