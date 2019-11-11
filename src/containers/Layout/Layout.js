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
              selectedCharacter={this.state.selectedCharacter}
              charSelector={this.changeSelectedCharacter}
            />
            <Route
              path="/"
              exact
              render={props => (
                <SelectScreen
                  {...props}
                  selectedCharacter={this.state.selectedCharacter}
                  charSelector={this.changeSelectedCharacter}
                />
              )}
            />
            <Route path="/FrameTable" component={FrameTable} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Layout;
