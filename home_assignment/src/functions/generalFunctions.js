const compareDates = (date1, date2) => {
  let dateOne = new Date(date1);
  let dateTwo = new Date(date2);
  if (dateOne < dateTwo) {
    return true;
  } else {
    return false;
  }
};

export const getData = async (
  url,
  setResults,
  setBadResults,
  setGoodUrls,
  setErrorMessage,
  setDates,
  setDateTypes,
  setRepoCounter
) => {
  // initial top level fetch

  const data = await fetch(url);
  if (data.status != 200) {
    setErrorMessage(true);
  } else {
    setErrorMessage(false);
  }
  //comparing times
  const JsonData = await data.json();
  const dateObject = {
    createdAt: JsonData.created_at,
    updatedAt: JsonData.updated_at,
  };
  if (dateObject) {
    setDateTypes(dateObject);
  }
  setDates(compareDates(JsonData.created_at, JsonData.updated_at));

  //turning the object into an array to allow for sorting by url parameter
  const jsonArray = Object.entries(JsonData);
  let urlList = [];
  //looping through the array and adding any value that includes the URL to the new array
  for (let x = 0; x < jsonArray.length; x++) {
    for (let j = 1; j < jsonArray[x].length; j++) {
      if (
        jsonArray[x][j] &&
        jsonArray[x][j]
          .toString()
          .includes("https://api.github.com/orgs/BoomTownROI")
      ) {
        urlList.push(jsonArray[x][j]);
      }
    }
  }
  // fetching the sub urls
  let goodUrls = [];
  let badUrls = [];
  let finalListOfObjects = [];
  for (let x = 0; x < urlList.length; x++) {
    let subData = await fetch(urlList[x]);
    if (subData.status === 200) {
      goodUrls.push(subData.url);
      let subDataJson = await subData.json();
      finalListOfObjects.push(subDataJson);
    } else if (subData.status === 404) {
      badUrls.push(subData.url);
    }
  }

  if (badUrls.length > 0) {
    setBadResults(badUrls);
  }
  if (goodUrls.length > 0) {
    setGoodUrls(goodUrls);
  }

  if (finalListOfObjects.length > 0) {
    setResults(finalListOfObjects);
  }
  //for comparing repo count number to number of returned arrays in repo url
  const publicRepoCount = JsonData.public_repos;
  const repoCount = finalListOfObjects[1].length;
  if (repoCount === publicRepoCount) {
    setRepoCounter(`Public repo count of ${repoCount} matches with the number of repo arrays returned from
    the repos_url `);
  } else {
    setRepoCounter(`Public repo count of ${repoCount} does not match with the number of repo arrays returned from
    the repos_url`);
  }
};

//function to clear data
export const clearData = (
  setResults,
  setBadResults,
  setGoodUrls,
  setErrorMessage,
  setDates,
  setDateTypes,
  setRepoCounter
) => {
  setResults("");
  setBadResults("");
  setGoodUrls("");
  setErrorMessage("");
  setDates("");
  setDateTypes("");
  setRepoCounter("");
};
