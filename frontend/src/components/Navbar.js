function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>⚡ AuthFlow</h2>
    </div>
  );
}

const styles = {
  nav: {
    height: "60px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
  }
};

export default Navbar;