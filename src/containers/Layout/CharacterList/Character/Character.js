import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Spring } from "react-spring/renderprops";

class Character extends Component {
  state = {
    hovered: false
  };
  onHoverHandler = () => {
    this.setState(state => {
      return { hovered: !state.hovered };
    });
  };

  render() {
    return (
      <div style={{ paddingTop: "50px" }}>
        <Spring
          to={{
            transform: `scale(${this.state.hovered ? 1.1 : 1}`
          }}
        >
          {animProps => (
            <Image
              style={animProps}
              rounded
              onClick={this.props.charSelector}
              alt={this.props.name}
              src={this.props.ThumbnailUrl}
              onMouseEnter={this.onHoverHandler}
              onMouseLeave={this.onHoverHandler}
            />
          )}
        </Spring>
      </div>
    );
  }
}

export default Character;
