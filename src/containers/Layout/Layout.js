import React from "react";
import ImageStyle from "./Layout.module.css";

class Layout extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Layout;
