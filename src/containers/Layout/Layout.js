import React from "react";
import SelectScreen from "./SelectScreen";
import CharacterList from "./CharacterList";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SelectScreen/>
      </div>
      );
  }
}

export default Layout;