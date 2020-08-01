import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import ColorContext from "../context/ColorContext";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          <ColorContext.Provider value="green">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
