// API RESPONSE FORMAT
// this is an example response

// {
//   queryCost: 1,
//   latitude: 51.5064,
//   longitude: -0.12721,
//   resolvedAddress: 'London, England, United Kingdom',
//   address: 'London',
//   timezone: 'Europe/London',
//   tzoffset: 1,
//   description: 'Similar temperatures continuing with no rain expected.',
//   days: [
//     {
//       datetime: '2025-07-29',
//       datetimeEpoch: 1753743600,
//       tempmax: 67.6,
//       tempmin: 59.2,
//       temp: 63.5
//       feelslikemax: 67.6,
//       feelslikemin: 59.2,
//       feelslike: 63.5,
//       dew: 53.1,
//       humidity: 69.3,
//       precip: 0.217,
//       precipprob: 100,
//       precipcover: 25,
//       preciptype: [Array],
//       snow: 0,
//       snowdepth: 0,
//       windgust: 13,
//       windspeed: 7.7,
//       winddir: 274.7,
//       pressure: 1019.2,
//       cloudcover: 85.5,
//       visibility: 7.7,
//       solarradiation: 86.2,
//       solarenergy: 7.3,
//       uvindex: 3,
//       severerisk: 10,
//       sunrise: '05:20:04',
//       sunriseEpoch: 1753762804,
//       sunset: '20:53:05',
//       sunsetEpoch: 1753818785,
//       moonphase: 0.15,
//       conditions: 'Rain, Partially cloudy',
//       description: 'Partly cloudy throughout the day with rain.',
//       icon: 'rain',
//       stations: [Array],
//       source: 'comb',
//       hours: [Array]
//     }
//   ],
//   alerts: [],
//   stations: {
//     EGWU: {
//       distance: 20850,
//       latitude: 51.55,
//       longitude: -0.42,
//       useCount: 0,
//       id: 'EGWU',
//       name: 'EGWU',
//       quality: 50,
//       contribution: 0
//     },
//     EGLC: {
//       distance: 12300,
//       latitude: 51.5,
//       longitude: 0.05,
//       useCount: 0,
//       id: 'EGLC',
//       name: 'EGLC',
//       quality: 50,
//       contribution: 0
//     },
//     EGLL: {
//       distance: 22564,
//       latitude: 51.48,
//       longitude: -0.45,
//       useCount: 0,
//       id: 'EGLL',
//       name: 'EGLL',
//       quality: 50,
//       contribution: 0
//     },
//     D5621: {
//       distance: 11192,
//       latitude: 51.535,
//       longitude: 0.028,
//       useCount: 0,
//       id: 'D5621',
//       name: 'DW5621 Upton Park UK',
//       quality: 0,
//       contribution: 0
//     },
//     F8628: {
//       distance: 14897,
//       latitude: 51.612,
//       longitude: 0.005,
//       useCount: 0,
//       id: 'F8628',
//       name: 'M0BPQ Chingford UK',
//       quality: 0,
//       contribution: 0
//     }
//   },
//   currentConditions: {
//     datetime: '19:00:00',
//     datetimeEpoch: 1753812000,
//     temp: 68.2,
//     feelslike: 68.2,
//     humidity: 65.2,
//     dew: 56.1,
//     precip: 0,
//     precipprob: 0,
//     snow: 0,
//     snowdepth: 0,
//     preciptype: null,
//     windgust: 2.6,
//     windspeed: 2.8,
//     winddir: 215,
//     pressure: 1018,
//     visibility: 6.2,
//     cloudcover: 100,
//     solarradiation: 41,
//     solarenergy: 0.1,
//     uvindex: 0,
//     conditions: 'Overcast',
//     icon: 'cloudy',
//     stations: [ 'D5621', 'EGLC', 'F8628' ],
//     source: 'obs',
//     sunrise: '05:20:04',
//     sunriseEpoch: 1753762804,
//     sunset: '20:53:05',
//     sunsetEpoch: 1753818785,
//     moonphase: 0.15
//   }
// }

import { format } from "date-fns";

class List {
  constructor() {
    this.list = [];
  }

  async getWeather(place) {
    try {
      const today = format(new Date(), "yyy-MM-dd");
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}/${today}?key=KBUSYKHPRM4GSTDU75CQM6LCB`;

      const response = await fetch(url);
      const data = await response.json(); //turns the contents of the response into a usable object

      const selectData = {
        location: data.address,
        temp: data.currentConditions.temp,
        feelsLike: data.currentConditions.feelslike,
        icon: data.currentConditions.icon,
      };

      this.list.push(selectData);
      return selectData;

    } catch (err) {
      console.log("There was an error retrieving data from the weather API!");
      console.error(err);
    }
  }
}

getWeather();
