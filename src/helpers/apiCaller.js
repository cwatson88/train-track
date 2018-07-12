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

  const live = (stationCode, date, time, destination) => {
    try {
      const response = getData(`${apiUrl}station/${stationCode}/live.json`, {
        calling_at: destination,
        train_status: "passenger",
        app_key: "b8cae571838e67407863f3ac6031f044",
        app_id: "d026ddd3",
        darwin: true
      });
      // optional param of operator
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  //https://transportapi.com/v3/uk/train/station/eus/live.json?app_id=d026ddd3&app_key=b8cae571838e67407863f3ac6031f044&calling_at=bhi&darwin=true&operator=vt&train_status=passenger
  //   const stationLive = `${apiUrl}station/${stationCode}/live.json`;
  //   const train = ` ${apiUrl}service/${service}/${date}/${time}/timetable.json`;

  return { station, live };
  // stationLive,
  // train
})();

// a better api, full info at https://huxley.apphb.com/
//huxley.apphb.com/all/bhi/from/rugby/20?accessToken=de3373f2-54fc-4e1a-9ffc-ebc14108b1a3

const getTrainServices = async (to, from) => {
  const accessToken = "accessToken=de3373f2-54fc-4e1a-9ffc-ebc14108b1a3";
  const apiUrl = `https://huxley.apphb.com/departures/${from}/to/${to}?${accessToken}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export { getService, getTrainServices };
