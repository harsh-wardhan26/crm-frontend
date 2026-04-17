import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ background: "#333", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        Login
      </Link>

      <Link to="/register" style={{ color: "white", marginRight: "15px" }}>
        Register
      </Link>

      <Link to="/dashboard" style={{ color: "white", marginRight: "15px" }}>
        Dashboard
      </Link>

      <Link to="/customers" style={{ color: "white" }}>
        Customers
      </Link>
    </div>
  );
}

export default Navbar;