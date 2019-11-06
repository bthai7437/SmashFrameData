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
    // this.setState();
  }

  render() {
    return (
      <div className={ImageStyle.BackgroundImage}>
        <NavBar selectedCaracter={this.state.selectedCharacter}/>
        <div>
          <SelectScreen charSelector={this.changeSelectedCharacter}/>
        </div>
      </div>
    );
  }
}

export default Layout;
