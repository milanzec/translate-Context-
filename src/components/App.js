import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  onClickChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="uk flag"
            onClick={() => this.onClickChange("english")}
          ></i>
          <i
            className="serbia flag"
            onClick={() => this.onClickChange("serbian")}
          ></i>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
