
const myFunction = () => {
  return null;
}

const submitHandler = (event) => {
  event.preventDefault();
  console.log(`ready to search for ${citySearchString}`);

  fetch(queryString)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // console.log(data.main.temp);
      // console.log(data.coord);
      // setWeatherData(convertDataToModel(data));
      try {
        // setCurrentTemp(data.main.temp);

        //copy data then mutate it
        // const copyWeather = weatherDataList[0];
        // copyWeather.currTemp = data.main.temp;
        // setWeatherDataList(weatherDataList => [...weatherDataList, copyWeather]);
        setCurrentTemp(data.main.temp);
        setHighTemp(data.main.temp_max);
        setLowTemp(data.main.temp_min);

      } catch (err) {
        console.log(err);
      }
    })
    .catch((error) => {
      console.log(error);
    });

}

module.exports = {
  myFunction: myFunction,
  submitHandler: submitHandler
}