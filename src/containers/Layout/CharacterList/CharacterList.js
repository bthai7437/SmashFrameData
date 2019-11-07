import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Character from "./Character/Character";
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
              <Col key={image.InstanceId} xs="auto" md="auto">
                <Character
                  name={image.Name}
                  ThumbnailUrl={image.ThumbnailUrl}
                  isFiltered={true}
                />
              </Col>
            );
          }
        } else {
          result = (
            <Col key={image.InstanceId} xs="auto" md="auto">
              <Character
                name={image.Name}
                isFiltered
                ThumbnailUrl={image.ThumbnailUrl}
              />
            </Col>
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
        <div>
          <Row>{images}</Row>
          <Row>{emptyImages}</Row>
        </div>
      );
    }
    return <div>Loading</div>;
  }
}

export default CharacterList;
