import React from "react";
import NavBar from "./NavBar/NavBar";
import SelectScreen from "./SelectScreen/SelectScreen";
import ImageStyle from "./Layout.module.css";

class Layout extends React.Component {
  state = {
    selectedCharacter: null
  };

  changeSelectedCharacter = (name) =>{
    //change the selected character to the one clicked
    console.log("New name:"+name);
    this.setState({selectedCharacter: name});
  }

  render() {
    console.log("State name:"+this.state.selectedCharacter);
    return (
      <div className={ImageStyle.BackgroundImage}>
        <NavBar selectedCaracter={this.state.selectedCharacter} charSelector={this.changeSelectedCharacter}/>
        <div>
          <SelectScreen charSelector={this.changeSelectedCharacter}/>
        </div>
      </div>
    );
  }
}

export default Layout;
