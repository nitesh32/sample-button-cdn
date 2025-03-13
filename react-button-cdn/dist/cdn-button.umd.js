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
      console.log(
        `Target element with ID ${targetId} not found yet. Will retry when available.`
      );
      watchForElement(targetId);
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

    // Only append if the element doesn't already have the button
    if (!targetElement.querySelector(".cdn-custom-button")) {
      // Append the button to the target element
      targetElement.appendChild(button);
    }
  }

  // Watch for element to appear in DOM using MutationObserver
  function watchForElement(targetId) {
    // Create an observer instance
    const observer = new MutationObserver(function (mutations) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // We found the element, create the button
        createButton(targetId);
        // Stop observing
        observer.disconnect();
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Set a backup timeout to retry after 2 seconds in case the observer misses it
    setTimeout(function () {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        createButton(targetId);
        observer.disconnect();
      }
    }, 2000);
  }

  // Initialize when DOM is fully loaded
  function init(customId) {
    const targetId = customId || "cdn-button";
    createButton(targetId);
  }

  // Run initialization
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      init();
    });
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
