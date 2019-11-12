import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
class Character extends Component {
  state = {
    hovered: false,
    selected: false
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
              alt={this.props.Name}
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

export default withRouter(Character);
