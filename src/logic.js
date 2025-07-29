
// fetch info from API
async function getWeather() {
    try {
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London/2025-07-29?key=KBUSYKHPRM4GSTDU75CQM6LCB');
        const data = await response.json();
        console.log(`${response}`);
    } catch (err) {
        console.log('error!');
    }
};

getWeather();

