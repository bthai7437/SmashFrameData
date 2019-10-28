import React from "react";
import NavBar from "./NavBar";
import SelectScreen from "./SelectScreen";

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