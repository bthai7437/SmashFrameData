import React from "react";
import Axios from "../../../axios";
import CharacterList from "../CharacterList/CharacterList";
import Container from "react-bootstrap/Container";
import SearchBar from "../../../components/UI/SearchBar/SearchBar";

class SelectScreen extends React.Component {
  state = {
    currentCharacter: null,
    characterData: [],
    loaded: false,
    error: false,
    isFiltered: false,
    searchString: ""
  };

  componentDidMount() {
    Axios.get("/characters")
      .then(res => {
        console.log(res.data);
        this.setState({ characterData: res.data, loaded: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  }

  onSearchChangeHandler = event => {
    const filter = event.target.value;
    if (event.target.value !== "") {
      this.setState({
        searchString: filter,
        isFiltered: true
      });
    } else {
      this.setState({
        searchString: filter,
        isFiltered: false
      });
    }
  };

  render() {
    let loadedCharacters = null;
    if (this.state.loaded) {
      loadedCharacters = (
        <CharacterList
          isFiltered={this.state.isFiltered}
          characters={this.state.characterData}
          charSelector={this.props.charSelector}
          searchString={this.state.searchString}
        ></CharacterList>
      );
    }
    return (
      <Container fluid>
        <SearchBar onSearch={this.onSearchChangeHandler}>
          {loadedCharacters}
        </SearchBar>
      </Container>
    );
  }
}

export default SelectScreen;
