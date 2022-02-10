import React from "react";
import { getData, clearData } from "../functions/generalFunctions";
import { useState } from "react";
import BadRequests from "./BadRequests";
import GoodRequests from "./GoodRequests";
import Dates from "./Dates";
import RepoCounter from "./RepoCounter";
import "../styles/ouputStyles.css";

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
      <div className="mainButtonDiv">
        <h1 className="buttonDivHeader">Find BoomTown API Data Here</h1>
        <div className="actualButtonsDiv">
          <button
            className="getDataButton"
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
            Click for Data
          </button>
          <button
            className="clearDataButton"
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
            Clear Data
          </button>
        </div>
      </div>
      {errorMessage ? (
        <h1>ERROR: YOU HAVE EXCEEDED YOUR MAX REQUEST LIMIT</h1>
      ) : (
        <></>
      )}
      <div className="goodUrlsMainDiv">
        {results ? (
          <GoodRequests goodUrls={goodUrls} results={results} />
        ) : (
          <></>
        )}
      </div>
      {/* <div className="badResultsMainDiv"> */}
      {badResults ? (
        <div className="badResultsHeaderDiv">
          <h2 className="badResultsHeader">
            The following URLs have responded with status code 404
          </h2>
        </div>
      ) : (
        <></>
      )}

      {badResults &&
        badResults.map((result) => <BadRequests results={result} />)}
      {/* </div> */}
      {dates && <Dates dates={dates} dateTypes={dateTypes} />}

      {repoCounter ? <RepoCounter repoCounter={repoCounter} /> : <></>}
    </div>
  );
}
