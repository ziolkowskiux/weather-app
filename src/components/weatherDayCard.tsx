import React, { Component } from "react";

interface Props  {
  weather: object,
}

class weatherDayCard extends Component<Props> {

  render() {
    return (
      <div>
        <div>Date: {this.props.weather.applicable_date}</div>
        <div>Current temp: {this.props.weather.the_temp}</div>
        <div>Minimum: {this.props.weather.min_temp}</div>
        <div>Max: {this.props.weather.max_temp}</div>
      </div>
    )
  }
}

export default weatherDayCard;