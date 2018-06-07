/* 
 --- This api service uses https://developer.transportapi.com/  ---
    docuemntation can be found at:
         https://developer.transportapi.com/docs?raml=https://transportapi.com/v3/raml/transportapi.raml##uk_train_station_station_code_live_json
 */

import axios from "axios";

async function getData(url, params) {
  try {
    const response = await axios.get(url, {
      params
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const getService = (() => {
  const apiUrl = "https://transportapi.com/v3/uk/train/";
  const station = (stationCode, date, time, destination) => {
    try {
      const response = getData(
        `${apiUrl}station/${stationCode}/${date}/${time}/timetable.json`,
        {
          calling_at: destination,
          train_status: "passenger",
          app_key: "b8cae571838e67407863f3ac6031f044",
          app_id: "d026ddd3"
        }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  //   const stationLive = `${apiUrl}station/${stationCode}/live.json`;
  //   const train = ` ${apiUrl}service/${service}/${date}/${time}/timetable.json`;

  return {
    station
    // stationLive,
    // train
  };
})();

export {getService}
