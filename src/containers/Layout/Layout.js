import React from "react";
import NavBar from "./NavBar/NavBar";
import SelectScreen from "./SelectScreen/SelectScreen";
import ImageStyle from "./Layout.module.css";

class Layout extends React.Component {
  render() {
    return (
      <div className={ImageStyle.BackgroundImage}>
        <NavBar />
        <div>
          <SelectScreen />
        </div>
      </div>
    );
  }
}

export default Layout;
