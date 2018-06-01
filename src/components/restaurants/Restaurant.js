import React, { Component } from "react";
import ReviewInput from "../reviews/ReviewInput";

class Restaurant extends Component {
  handleClick = () => {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    });
  };
  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <ReviewInput restaurantId={this.props.restaurant.id} />
        <button onClick={this.handleClick}>delete</button>
      </li>
    );
  }
}

export default Restaurant;
