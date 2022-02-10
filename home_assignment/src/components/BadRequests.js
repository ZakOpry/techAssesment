import React from "react";
import "../styles/badRequestsStyles.css";

export default function BadRequests(props) {
  const urls = props.results;

  return (
    <div className="badUrlDivs">
      <p>{urls}</p>
    </div>
  );
}
