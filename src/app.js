import React from "react";
import Header from "./components/main/header";
import Body from "./components/main/body";
require("./styles/style.scss");

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Body></Body>
      </>
    );
  }
}

export default App;
