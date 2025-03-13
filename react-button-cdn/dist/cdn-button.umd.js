// cdn-button.umd.js
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.cdnButton = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  // Create the button element
  function createButton(targetId) {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      console.error(`Target element with ID ${targetId} not found`);
      return;
    }

    // Create button element
    const button = document.createElement("button");
    button.textContent = "CDN Button";
    button.className = "cdn-custom-button";

    // Add functionality/event listeners
    button.addEventListener("click", function () {
      console.log("CDN Button clicked!");
      // Add your custom functionality here
    });

    // Add button styles
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#4287f5";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";

    // Append the button to the target element
    targetElement.appendChild(button);
  }

  // Initialize when DOM is fully loaded
  function init() {
    createButton("cdn-button");
  }

  // Run initialization
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Return public API
  return {
    init: function (customId) {
      if (customId) {
        createButton(customId);
      } else {
        init();
      }
    },
  };
});
