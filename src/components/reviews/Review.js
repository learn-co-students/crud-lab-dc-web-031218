import React, { Component } from "react";

class Review extends Component {
  handleClick = () => {
    this.props.store.dispatch({
      type: "DELETE_REVIEW",
      id: this.props.review.id
    });
  };

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.handleClick}>delete</button>
      </li>
    );
  }
}

export default Review;
