import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <div className="brand-badge">S</div>
          <span>SigSecure</span>
        </div>
        <div className="nav-sub">
          Built by <strong style={{ color: "#e5e7eb" }}>Asmit Prakash</strong>
        </div>
      </div>
    </header>
  );
}
