import React, { Component } from "react";

interface Props  {
  weather: object,
}

interface State {
  details: boolean,
}

class weatherDayCard extends Component<Props, State> {
  state = {
    details: false
  }

  toggleDetails() {
    this.setState({details: !this.state.details})
  }

  render() {
    const showDetails = this.state.details;

    return (
      <div>
        <div>Date: {this.props.weather.applicable_date}</div>
        <div>Current temp: {this.props.weather_state_name}</div>
        <div>Current temp: {this.props.weather.the_temp}</div>
        
        <button onClick={() => {this.setState({details: !this.state.details})}}>
          {showDetails ?
             "Hide Details" :
             "Show Details"}
        </button>
        {showDetails ? 
          <div>
            <div>Minimum: {this.props.weather.min_temp}</div>
            <div>Max: {this.props.weather.max_temp}</div>
            <div>Air Pressure: {this.props.weather.air_pressure}</div>
            <div>Humidity: {this.props.weather.humidity}</div>
            <div>Visibility: {this.props.weather.visibility}</div>
          </div> : null
        }
        <hr/>
      </div>
    )
  }
}

export default weatherDayCard;