import React from "react";

export default function BadRequests(props) {
  const urls = props.results;

  return (
    <div>
      <div>
        <p>{urls}</p>
      </div>
    </div>
  );
}
