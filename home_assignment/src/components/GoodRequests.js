import React from "react";
import "../styles/goodRequestsStyles.css";

export default function GoodRequests(props) {
  const goodResults = props.results;
  const goodUrls = props.goodUrls;
  return (
    <div className="subDiv">
      <h2 className="header">URLs And Associated Keys And Values</h2>
      <h3>{goodUrls[0]}</h3>
      <p>id: {goodResults[0].id}</p>
      <h3>{goodUrls[1]}</h3>
      <div className="secondUrlIdDiv">
        {goodResults[1].map((nums) => (
          <p className="idNum">id: {nums.id}</p>
        ))}
      </div>
      <h3>{goodUrls[2]}</h3>
      <div className="thirdUrlIdDiv">
        {" "}
        {goodResults[2].map((nums) => (
          <p>id: {nums.id}</p>
        ))}
      </div>
    </div>
  );
}
