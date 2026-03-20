import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/api/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    });

    alert("Registered Successfully ✅");
  };

  return (
    <div style={styles.container}>

      {/* LEFT */}
      <div style={styles.left}>
        <h1 style={styles.logo}>⚡ AuthFlow</h1>
        <p>Create your account and start your journey</p>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        <div style={styles.card}>
          <h2>Create Account</h2>

          <div style={styles.inputGroup}>
            <FaUser />
            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div style={styles.inputGroup}>
            <FaEnvelope />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div style={styles.inputGroup}>
            <FaLock />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button style={styles.button} onClick={handleRegister}>
            Register
          </button>

          <p style={styles.bottomText}>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>

    </div>
  );
}

const styles = {
  container: { display: "flex", height: "100vh" },

  left: {
    flex: 1,
    background: "linear-gradient(135deg, #4f46e5, #6366f1)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "60px"
  },

  logo: { fontSize: "40px", fontWeight: "700" },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8fafc"
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "16px",
    width: "350px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
  },

  inputGroup: {
    display: "flex",
    gap: "10px",
    border: "1px solid #e2e8f0",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "15px"
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg,#4f46e5,#4338ca)",
    color: "#fff"
  },

  bottomText: { marginTop: "15px", textAlign: "center" }
};

export default Register;