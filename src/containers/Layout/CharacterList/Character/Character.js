import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Spring } from "react-spring/renderprops";

class Character extends Component {
  state = {
    hovered: false
  };

  componentDidMount() {}
  onHoverHandler = () => {
    this.setState(state => {
      return { hovered: !state.hovered };
    });
  };

  render() {
    const emptyImage = {
      height: "150px",
      width: "150px",
      backgroundColor: "#343a40"
    };

    let displayChar = (
      <Spring
        from={{
          opacity: 0
        }}
        to={{
          transform: `scale(${this.state.hovered ? 1.1 : 1}`,
          opacity: 1
        }}
      >
        {animProps => (
          <Image
            style={animProps}
            rounded
            onClick={() => console.log(this.props.name)}
            alt={this.props.name}
            src={this.props.ThumbnailUrl}
            onMouseEnter={this.onHoverHandler}
            onMouseLeave={this.onHoverHandler}
          />
        )}
      </Spring>
    );
    if (!this.props.isFiltered) {
      displayChar = <div style={emptyImage}></div>;
    }
    return <div style={{ paddingTop: "50px" }}>{displayChar}</div>;
  }
}

export default Character;
