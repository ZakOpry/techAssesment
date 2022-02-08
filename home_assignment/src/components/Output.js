import React from "react";
import { getData } from "../functions/generalFunctions";
import { useState } from "react";

export default function Output() {
  const [results, setResults] = useState([]);
  const [badResults, setBadResults] = useState();
  console.log(results);
  console.log(badResults);
  return (
    <div>
      <button
        onClick={() =>
          getData("https://api.github.com/orgs/boomtownroi", setResults)
        }
      >
        click for data
      </button>
    </div>
  );
}
