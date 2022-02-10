import React from "react";

export default function GoodRequests(props) {
  const goodResults = props.results;
  const goodUrls = props.goodUrls;
  return (
    <div>
      <h2>URLs and associated keys and values</h2>
      <h3>{goodUrls[0]}</h3>
      <p>id: {goodResults[0].id}</p>
      <h3>{goodUrls[1]}</h3>
      {goodResults[1].map((nums) => (
        <p>id: {nums.id}</p>
      ))}
      <h3>{goodUrls[2]}</h3>
      {goodResults[2].map((nums) => (
        <p>id: {nums.id}</p>
      ))}
    </div>
  );
}
