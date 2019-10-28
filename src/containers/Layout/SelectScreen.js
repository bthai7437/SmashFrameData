import React from "react";
import Axios from "../../axios";
import CharacterList from "./CharacterList";
import { isTSMethodSignature } from "@babel/types";

class SelectScreen extends React.Component{
    state = {
        characterData: {},
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

    render(){
        let thing = null;
        if (this.state.loaded) {
            console.log(this.state.characterData);
            thing = this.state.characterData;
        }
        return (
            <CharacterList characters={thing} />
        );
    }
}

export default SelectScreen;