import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Email and Password are required!");
      return;
    }
    console.log("Login successful!");
    alert("Login Successful!");
    navigate("/home");
  };

  const handleGoogleLogin = () => {
    alert("Logging in with Google...");
    console.log("Continue with Google clicked!");
  };

  const handleFaq = () => {
    alert("Redirecting to FAQ & Help page...");
    console.log("FAQ button clicked!");
  };

  const enhanceButtonHoverEffect = (event) => {
    event.target.style.transform = 'scale(1.05)';
    event.target.style.transition = 'transform 0.2s ease-in-out';
  };

  const resetButtonHoverEffect = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tabungin Login Page</title>
      <link rel="stylesheet" href="assets/css/style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <Link to="/signup">
            <button className="profile">SignUp</button>
          </Link>
        </nav>
      </header>
      <main className="login-container">
        <div className="login-box">
          <h2>Kamu Sudah Mempunyai Akun, Silahkan Log Ini!</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email or Username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email or Username"
              aria-label="Email or Username"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              aria-label="Password"
              required
            />
            <button
              type="submit"
              className="login-btn"
              aria-label="Log In"
              onMouseEnter={enhanceButtonHoverEffect}
              onMouseLeave={resetButtonHoverEffect}
            >
              Log In
            </button>
            <div className="divider">Or</div>
            <button
              type="button"
              className="google-login"
              aria-label="Continue with Google"
              onClick={handleGoogleLogin}
              onMouseEnter={enhanceButtonHoverEffect}
              onMouseLeave={resetButtonHoverEffect}
            >
              Continue with Google
            </button>
          </form>
        </div>
      </main>
      <footer>
        <button
          className="faq-btn"
          onClick={handleFaq}
          onMouseEnter={enhanceButtonHoverEffect}
          onMouseLeave={resetButtonHoverEffect}
        >
          FAQ &amp; Bantuan <span>❓</span>
        </button>
      </footer>
    </>
  );
}
