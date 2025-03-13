(function () {
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
  }

  // Initialize when DOM is fully loaded
  function init() {
    createButton("cdn-button");
  }

  // Run initialization when DOM is loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
