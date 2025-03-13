(function () {
  // Create the button element
  function createButton(targetId) {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      console.error(`Target element with ID ${targetId} not found`);
      return false;
    }

    // Create button element
    const button = document.createElement("button");
    button.textContent = "CDN Button";
    button.className = "cdn-custom-button";

    // Add functionality/event listeners
    button.addEventListener("click", function () {
      console.log("CDN Button clicked!");
      // Add your button functionality here
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
    return true;
  }

  // Function to wait for an element to appear in the DOM
  function waitForElement(selector, callback, maxWaitTime = 10000) {
    if (document.getElementById(selector)) {
      callback(selector);
      return;
    }

    // Set a timeout limit
    const timeout = setTimeout(() => {
      observer.disconnect();
      console.error(
        `Element ${selector} did not appear within ${maxWaitTime}ms`
      );
    }, maxWaitTime);

    // Create mutation observer to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      if (document.getElementById(selector)) {
        observer.disconnect();
        clearTimeout(timeout);
        callback(selector);
      }
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  // Initialize
  function init() {
    waitForElement("cdn-button", createButton);
  }

  // Run initialization
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
