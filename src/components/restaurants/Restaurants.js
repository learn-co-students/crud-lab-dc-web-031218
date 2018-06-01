import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store
      .getState()
      .restaurants.map((restaurant, i) => (
        <Restaurant key={i} store={this.props.store} restaurant={restaurant} />
      ));
    return <ul>{restaurants}</ul>;
  }
}

export default Restaurants;
