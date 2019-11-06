import React from "react";
import Axios from "../../../axios";
import CharacterList from "../CharacterList/CharacterList";
import Container from "react-bootstrap/Container";
import ImageStyle from "./SelectScreen.module.css";

class SelectScreen extends React.Component {
  state = {
    currentCharacter: null,
    characterData: [],
    loaded: false,
    error: false
  };

  componentDidMount() {
    Axios.get("/characters")
      .then(res => {
        this.setState({ characterData: res.data, loaded: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  }

  render() {
    if (this.state.loaded) {
      // console.log(this.state.characterData);
    }
    return (
      <Container>
        <CharacterList characters={this.state.characterData} charSelector={this.props.charSelector} />
      </Container>
    );
  }
}

export default SelectScreen;
