import React, { Component } from "react";

class LocationSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // I think this method can be removed
    // Or maybe keep it here to validate the input value
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event.target.location.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="location"
          // value={this.state.value}
          onChange={this.handleChange} // I don't think it's needed
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default LocationSearch;
