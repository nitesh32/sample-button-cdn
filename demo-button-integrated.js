// demo-button-integrated.js
(function () {
  // Create and inject the CSS
  const style = document.createElement("style");
  style.textContent = `
      .demo-button {
        background-color: #4CAF50;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
        border: none;
        transition: background-color 0.3s;
      }
  
      .demo-button:hover {
        background-color: #45a049;
      }
    `;
  document.head.appendChild(style);

  // Create and inject the button
  const button = document.createElement("button");
  button.className = "demo-button";
  button.id = "demoButton";
  button.textContent = "Try Demo";

  // Find where to inject the button
  const script = document.currentScript;
  script.parentNode.insertBefore(button, script);

  // Add event listener
  button.addEventListener("click", function () {
    // Demo functionality
    const demoModal = document.createElement("div");
    demoModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      `;

    const modalContent = document.createElement("div");
    modalContent.style.cssText = `
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        max-width: 80%;
        max-height: 80%;
        overflow: auto;
        position: relative;
      `;

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: #f44336;
        color: white;
        border: none;
        border-radius: 3px;
        padding: 5px 10px;
        cursor: pointer;
      `;

    const demoContent = document.createElement("div");
    demoContent.innerHTML =
      "<h2>Demo Content</h2><p>This is your interactive demo. Replace this content with your actual demo.</p>";

    modalContent.appendChild(closeButton);
    modalContent.appendChild(demoContent);
    demoModal.appendChild(modalContent);
    document.body.appendChild(demoModal);

    // Handle closing the modal
    closeButton.addEventListener("click", function () {
      document.body.removeChild(demoModal);
    });

    demoModal.addEventListener("click", function (event) {
      if (event.target === demoModal) {
        document.body.removeChild(demoModal);
      }
    });
  });
})();
