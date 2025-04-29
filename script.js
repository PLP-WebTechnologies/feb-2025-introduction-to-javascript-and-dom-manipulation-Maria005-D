// Change the text of the intro paragraph
document.getElementById("change-text-btn").addEventListener("click", () => {
    const paragraph = document.getElementById("intro-text");
    paragraph.textContent = "This paragraph text was changed using JavaScript!";
  });
  
  // Modify the heading's style
  document.getElementById("change-style-btn").addEventListener("click", () => {
    const heading = document.getElementById("main-heading");
    heading.style.color = "#e74c3c";
    heading.style.fontSize = "3rem";
    heading.style.textTransform = "uppercase";
    heading.style.borderBottom = "3px solid #e74c3c";
  });
  
  // Toggle a dynamic box element
  document.getElementById("toggle-element-btn").addEventListener("click", () => {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("dynamic-box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement("div");
      box.id = "dynamic-box";
      box.textContent = "🎉 This box was created dynamically with JavaScript!";
      container.appendChild(box);
    }
  });
  