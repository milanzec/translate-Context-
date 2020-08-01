import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
  renderButton(language) {
    return language === "english" ? "Submit" : "Prosledi";
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`button ${color} ui`}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderButton(language)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
