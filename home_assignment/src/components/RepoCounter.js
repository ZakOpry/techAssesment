import React from "react";

export default function RepoCounter(props) {
  const { repoCounter } = props;
  return (
    <div>
      <h2>Repo Count Comparison</h2>
      <p>{repoCounter}</p>
    </div>
  );
}
