import React, { Component } from "react";
import { getLocationAsync } from "../utils";


// in TypeScript you have to define type of each variable in interface
interface Props  {
  location: string,
  onClick: any,
}

class LocationsList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      selectedItem: []
    }

    this.selectLocation = this.selectLocation.bind(this);
  }
  
  selectLocation(event) {
    event.preventDefault();
    this.props.onClick(event.target.value);
  }

  //Ok then, so why my header setup didn't work
  componentDidMount() {}

  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      getLocationAsync(this.props.location, "location").then(data => {
        this.setState({
          isLoaded: true,
          items: data
        });
      }); // should I add here error resolution ? I think I should.
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item, index) => (
            <li key={item.id} value={item.woeid} onClick={this.selectLocation}>
              {item.title}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default LocationsList;
