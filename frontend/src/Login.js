import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Fetch to backend using environment variable URL
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // Convert response to JSON
      const data = await res.json();

      // If login is successful, store token and navigate
      if (data.access) {
        localStorage.setItem("token", data.access);
        navigate("/profile");
      } else {
        alert("Login failed: " + (data.detail || "Unknown error"));
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Check console.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h1 style={styles.logo}>⚡ AuthFlow</h1>
        <p style={styles.tagline}>
          Build secure apps with modern authentication.
        </p>
      </div>

      <div style={styles.right}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome Back</h2>

          <div style={styles.inputGroup}>
            <FaUser />
            <input
              style={styles.input}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div style={styles.inputGroup}>
            <FaLock />
            <input
              style={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button style={styles.button} onClick={handleLogin}>
            Login
          </button>

          <p style={styles.bottomText}>
            Don’t have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex", height: "100vh", fontFamily: "Inter" },
  left: {
    flex: 1,
    background: "linear-gradient(135deg, #4f46e5, #6366f1)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "60px",
  },
  logo: { fontSize: "40px", fontWeight: "700" },
  tagline: { marginTop: "10px", fontSize: "18px", opacity: 0.9 },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8fafc",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "16px",
    width: "350px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  title: { marginBottom: "25px", fontWeight: "600" },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1px solid #e2e8f0",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  input: { border: "none", outline: "none", width: "100%", fontSize: "14px" },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg,#4f46e5,#4338ca)",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
  },
  bottomText: { marginTop: "15px", fontSize: "14px", textAlign: "center" },
};

export default Login;