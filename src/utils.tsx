let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let targetUrl = "https://www.metaweather.com/api/location/";


// Remember, async function returns promise that you have to further parse.

export async function sendRequest(location) {
  let result = [];

  await fetch(proxyUrl + targetUrl + location)
    .then(res => res.json())
    .then(
      res => {
        result = res;
      },
      error => {
        return error;
      }
    )
    .catch(function(error) {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
    });

  return result;
}

export async function getLocationAsync(value: string, type: string) {
  let target: string;
  
  if (type === "location") {
    target = proxyUrl + targetUrl + "search/?query=" + value;
  } else if (type === "locationDetails") {
    target = proxyUrl + targetUrl + value;
  } else {
    return;
  }

  let response = await fetch(target);
  let data = await response.json();
  return data;
}
