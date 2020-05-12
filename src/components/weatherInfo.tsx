import React, { Component } from "react";
import {getLocationAsync} from "../utils";

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
      <ul>
      {details.map((item, index) => (
        <li key={item.id}>
          {item.weather_state_name}
        </li>
      ))}
    </ul>
    );
  }
}

export default weatherInfo;
