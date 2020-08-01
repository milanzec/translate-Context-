import React from "react";
import LanguageContext from "../context/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          className="uk flag"
          onClick={() => this.context.onLanguageChange("english")}
        ></i>
        <i
          className="serbia flag"
          onClick={() => this.context.onLanguageChange("serbian")}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
