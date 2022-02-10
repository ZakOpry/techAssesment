import React from "react";
import "../styles/headerStyles.css";

export default function Header() {
  return (
    <div className="headerDiv">
      <h1 className="headerTitle">Boom</h1>
      <h1 className="town">Town!</h1>
      <h1 className="apiData"> API Data</h1>
    </div>
  );
}
