// SampleCompEnhanced.js - Advanced React component with inlined CSS for CDN use
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports, require("react"))
    : typeof define === "function" && define.amd
    ? define(["exports", "react"], factory)
    : ((global = global || self),
      factory((global.SampleComp = {}), global.React));
})(this, function (exports, React) {
  "use strict";

  React =
    React && Object.prototype.hasOwnProperty.call(React, "default")
      ? React["default"]
      : React;

  // Inject component styles into the document
  function injectStyles() {
    // Create a style element
    const style = document.createElement("style");
    style.id = "sample-comp-styles";

    // Only inject styles once
    if (document.getElementById(style.id)) {
      return;
    }

    // Define CSS rules
    style.innerHTML = `
          .sample-comp-container {
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            margin: 20px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          
          .sample-comp-container:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          }
          
          .sample-comp-button {
            background-color: #2c3e50;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
            margin: 5px;
          }
          
          .sample-comp-button:hover {
            background-color: #1a252f;
          }
          
          .sample-comp-counter {
            font-size: 1.2em;
            margin: 10px 0;
          }
          
          .sample-comp-header {
            margin-top: 0;
            margin-bottom: 15px;
          }
        `;

    // Append to document head
    document.head.appendChild(style);
  }

  // The enhanced component
  const SampleComp = function SampleComp(props) {
    // Inject styles when component is used
    injectStyles();

    // Access React hooks
    const [count, setCount] = React.useState(0);
    const [theme, setTheme] = React.useState(props.theme || "light");

    // Compute container style based on theme and props
    const containerStyle = {
      backgroundColor:
        theme === "light" ? props.backgroundColor || "#3498db" : "#2c3e50",
      color: theme === "light" ? props.textColor || "white" : "#ecf0f1",
    };

    // Render methods for cleaner component structure
    const renderCounter = () => {
      return React.createElement(
        "div",
        { className: "sample-comp-counter" },
        "Count: ",
        count
      );
    };

    const renderButtons = () => {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          {
            className: "sample-comp-button",
            onClick: function () {
              setCount(count + 1);
            },
          },
          "Increment"
        ),
        React.createElement(
          "button",
          {
            className: "sample-comp-button",
            onClick: function () {
              setCount(count - 1);
            },
          },
          "Decrement"
        ),
        React.createElement(
          "button",
          {
            className: "sample-comp-button",
            onClick: function () {
              setTheme(theme === "light" ? "dark" : "light");
            },
          },
          "Toggle Theme"
        )
      );
    };

    // Main render
    return React.createElement(
      "div",
      {
        className: "sample-comp-container",
        style: containerStyle,
        "data-testid": "sample-comp",
      },
      React.createElement(
        "h2",
        { className: "sample-comp-header" },
        props.text || "Enhanced Sample Component"
      ),
      renderCounter(),
      renderButtons()
    );
  };

  // Export the component
  exports.SampleComp = SampleComp;

  Object.defineProperty(exports, "__esModule", { value: true });
});
