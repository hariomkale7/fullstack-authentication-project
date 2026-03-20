function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <p>Dashboard</p>
      <p>Profile</p>
      <p>Settings</p>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    background: "#1e293b",
    color: "#fff",
    height: "100vh",
    padding: "20px"
  }
};

export default Sidebar;