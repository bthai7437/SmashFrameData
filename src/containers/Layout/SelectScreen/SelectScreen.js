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
    if (this.state.loaded) {
      // console.log(this.state.characterData);
    }
    return (
      <Container>
        <SearchBar onSearch={this.onSearchChangeHandler}>
          <CharacterList
            characters={this.state.characterData}
            isFiltered={this.state.isFiltered}
            searchString={this.state.searchString}
          />
        </SearchBar>
      </Container>
    );
  }
}

export default SelectScreen;
