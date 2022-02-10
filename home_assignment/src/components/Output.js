import React from "react";
import { getData, clearData } from "../functions/generalFunctions";
import { useState } from "react";
import BadRequests from "./BadRequests";
import GoodRequests from "./GoodRequests";
import Dates from "./Dates";
import RepoCounter from "./RepoCounter";

export default function Output() {
  const [results, setResults] = useState();
  const [badResults, setBadResults] = useState();
  const [goodUrls, setGoodUrls] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const [dates, setDates] = useState();
  const [dateTypes, setDateTypes] = useState();
  const [repoCounter, setRepoCounter] = useState();

  return (
    <div>
      <button
        onClick={() =>
          getData(
            "https://api.github.com/orgs/boomtownroi",
            setResults,
            setBadResults,
            setGoodUrls,
            setErrorMessage,
            setDates,
            setDateTypes,
            setRepoCounter
          )
        }
      >
        click for data
      </button>
      <button
        onClick={() =>
          clearData(
            setResults,
            setBadResults,
            setGoodUrls,
            setErrorMessage,
            setDates,
            setDateTypes,
            setRepoCounter
          )
        }
      >
        clear data
      </button>
      {errorMessage ? (
        <h1>ERROR: YOU HAVE EXCEEDED YOUR MAX REQUEST LIMIT</h1>
      ) : (
        <></>
      )}
      <div>
        {results ? (
          <GoodRequests goodUrls={goodUrls} results={results} />
        ) : (
          <></>
        )}
      </div>
      <div>
        {badResults ? (
          <h2>The following URLs have responded with status code 404</h2>
        ) : (
          <></>
        )}
      </div>
      {badResults &&
        badResults.map((result) => <BadRequests results={result} />)}
      {dates && <Dates dates={dates} dateTypes={dateTypes} />}

      {repoCounter ? <RepoCounter repoCounter={repoCounter} /> : <></>}
    </div>
  );
}
