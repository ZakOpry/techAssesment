export const getData = async (url, setResults) => {
  // initial top level fetch

  const data = await fetch(url);
  const JsonData = await data.json();

  //turning the object into an array
  const jsonArray = Object.entries(JsonData);
  let urlList = [];
  //looping through the array and adding any value that includes the URL to the new list
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
  //   console.log(urlList);
  let badUrls = [];
  let finalListOfObjects = [];
  for (let x = 0; x < urlList.length; x++) {
    let subData = await fetch(urlList[x]);
    if (subData.status === 200) {
      let subDataJson = await subData.json();
      //   console.log(subDataJson);
      finalListOfObjects.push(subDataJson);
    } else if (subData.status === 404) {
      badUrls.push(subData.url);
    }
  }

  //   setBadResults(badUrls);
  setResults(finalListOfObjects);
};
