import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // If no token, redirect to login
      navigate("/login");
      return;
    }

    // Fetch user profile from backend
    fetch(`${process.env.REACT_APP_API_URL}/api/profile/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch profile");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => {
        console.error("Profile fetch error:", err);
        // Redirect to login if token invalid or fetch fails
        navigate("/login");
      });
  }, []); // run only once on mount

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <Sidebar />

        <div style={styles.main}>
          <h1>Dashboard</h1>

          <div style={styles.card}>
            <h2>{user ? user.username || user.email : "Loading..."}</h2>
            <p>Status: Active ✅</p>
          </div>

          <button style={styles.logout} onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex" },

  main: {
    flex: 1,
    padding: "30px",
    background: "#f8fafc",
    height: "100vh",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
  },

  logout: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid red",
    color: "red",
    background: "transparent",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Profile;