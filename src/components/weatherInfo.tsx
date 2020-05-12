import React, { Component } from "react";
import {getLocationAsync} from "../utils";
import WeatherDayCard from "./weatherDayCard";

interface Props {
  locationDetails: string,
}

class weatherInfo extends Component<Props> {
  state = {
    details: [],
  }

  componentDidUpdate(prevProps: any) {
    const locationDetails = this.props.locationDetails;
    let locationData = [];
    if (locationDetails !== prevProps.locationDetails) {
      getLocationAsync(locationDetails, "locationDetails")
        .then(data => {
          locationData = data.consolidated_weather.map((item: object) => item);
          this.setState({
            details: locationData,
          })
        })
    }
  }

  render() {
    const {details} = this.state;
    return (
      <div>
        {details.map((item, index) => (
            <WeatherDayCard key={item.id} weather={item}/>
        ))}
      </div>
    );
  }
}

export default weatherInfo;
