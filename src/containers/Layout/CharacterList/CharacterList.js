import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Character from "./Character/Character";

class CharacterList extends Component {
  render() {
    if (this.props.characters[0]) {
      const images = this.props.characters.map(image => {
        return (
          <Col key={image.InstanceId} xs="auto" md="auto">
            <Character name={image.Name} ThumbnailUrl={image.ThumbnailUrl} />
          </Col>
        );
      });

      return (
        <div>
          <Row>{images}</Row>
        </div>
      );
    }
    return <div>Loading</div>;
  }
}

export default CharacterList;
