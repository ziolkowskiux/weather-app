import React, { Component } from "react";
import {getLocationAsync} from "../utils";

interface Props {
  locationDetails: string;
}

class weatherInfo extends Component<Props> {
  state = {
    details: [],
  }

  componentDidUpdate(prevProps: any) {
    const locationDetails = this.props.locationDetails;
    if (locationDetails !== prevProps.locationDetails) {
      getLocationAsync(locationDetails, "locationDetails")
        .then(data => {
          this.setState({
            details: data.consolidated_weather
          })
        })
    }
  }

  render() {
    return <div>{this.state.details}</div>;
  }
}

export default weatherInfo;
