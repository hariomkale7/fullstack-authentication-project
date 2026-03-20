import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function Profile() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

 useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/profile/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    })
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => console.log(err));
}, [navigate]); // add navigate here

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <Sidebar />

        <div style={styles.main}>
          <h1>Dashboard</h1>

          <div style={styles.card}>
            <h2>{user}</h2>
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
    height: "100vh"
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
  },

  logout: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid red",
    color: "red",
    background: "transparent",
    borderRadius: "8px"
  }
};

export default Profile;