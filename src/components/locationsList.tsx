import React, { Component } from "react";
import { getLocationAsync } from "../utils";


// in TypeScript you have to define type of each variable in interface
interface Props  {
  location: string,
  onClick: any,
  loading: boolean,
}

class LocationsList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: this.props.loading,
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
      this.setState({
        loading: this.props.loading
      })
      getLocationAsync(this.props.location, "location").then(data => {
        this.setState({
          isLoaded: true,
          items: data,
        });
      }); // should I add here error handling ? I think I should.
    }
  }

  render() {
    const { error, loading, isLoaded, items } = this.state;
    let loaded;
    
    if (error) {
      loaded = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      loaded = <div>Loading...</div>;
    } else {
      loaded = (<ul>
          {items.map((item, index) => (
            <li key={item.id} value={item.woeid} onClick={this.selectLocation}>
              {item.title}
            </li>
          ))}
        </ul>)
      ;
    }

    return (loading ? 
      loaded :
      <div>Please find location you are interested in.</div>
    )
  }
}

export default LocationsList;
