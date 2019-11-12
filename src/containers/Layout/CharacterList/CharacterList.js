import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Character from "./Character/Character";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";

class CharacterList extends Component {
  state = {
    isEmpty: false
  };

  render() {
    if (this.props.characters[0]) {
      const images = this.props.characters.map(image => {
        let result;
        if (this.props.isFiltered) {
          if (
            image.Name.toLowerCase().startsWith(
              this.props.searchString.toLowerCase()
            )
          ) {
            result = (
              <div key={image.InstanceId}>
                <Col xs="auto" md="auto">
                  <Link to={"/Frametable/" + image.Name}>
                    <Character
                      name={image.Name}
                      ThumbnailUrl={image.ThumbnailUrl}
                      isFiltered={true}
                    />
                  </Link>
                </Col>
              </div>
            );
          }
        } else {
          result = (
            <div key={image.InstanceId}>
              <Col key={image.InstanceId} xs="auto" md="auto">
                <Link to={"/Frametable/" + image.Name}>
                  <Character
                    name={image.Name}
                    isFiltered
                    ThumbnailUrl={image.ThumbnailUrl}
                  />
                </Link>
              </Col>
            </div>
          );
        }
        return result;
      });

      const emptyImages = this.props.characters.map(image => {
        let result;
        if (this.props.isFiltered) {
          if (
            !image.Name.toLowerCase().startsWith(
              this.props.searchString.toLowerCase()
            )
          ) {
            result = (
              <Col key={image.InstanceId} xs="auto" md="auto">
                <Character isFiltered={false} />
              </Col>
            );
          }
        }

        return result;
      });

      return (
        <div style={{ backgroundColor: "#343a40" }}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {animProps => <Row style={animProps}>{images}</Row>}
          </Spring>
          <Row>{emptyImages}</Row>
        </div>
      );
    }
    return <div>Loading</div>;
  }
}

export default CharacterList;
