import React from "react";
import "../styles/repoCounterStyles.css";

export default function RepoCounter(props) {
  const { repoCounter } = props;
  return (
    <div className="repoDiv">
      <h2>Repo Count Comparison</h2>
      <p>{repoCounter}</p>
    </div>
  );
}
