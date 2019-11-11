import React from "react";
import NavBar from "./NavBar/NavBar";
import SelectScreen from "./SelectScreen/SelectScreen";
import ImageStyle from "./Layout.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import FrameTable from "../../components/FrameTable/FrameTable";

class Layout extends React.Component {
  state = {
    selectedCharacter: null
  };

  changeSelectedCharacter = name => {
    //change the selected character to the one clicked
    console.log("New name:" + name);
    this.setState({ selectedCharacter: name });
  };

  render() {
    return (
      <div className={ImageStyle.BackgroundImage}>
        <BrowserRouter>
          <div>
            <NavBar
              selectedCaracter={this.state.selectedCharacter}
              charSelector={this.changeSelectedCharacter}
            />
            <Route path="/" exact component={SelectScreen} />
            <Route path="/FrameTable" component={FrameTable} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Layout;
