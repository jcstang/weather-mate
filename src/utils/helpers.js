import React, { useState } from 'react';

function helperFunctions() {

  const [citySearchString, setCitySearchString] = useState('Chicago');

  const submitHandler = (event, queryString) => {
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

  const onChangeHelper = (event) => {
    const userInputSearchString = event.target.value;
    setCitySearchString(userInputSearchString);
  }

  return null;

}

export default helperFunctions;
