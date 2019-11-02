import React from "react";
import NavBar from "../NavBar/NavBar";
import SelectScreen from "../SelectScreen/SelectScreen";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div>
          <SelectScreen/>
        </div>
      </div>
      );
  }
}

export default Layout;