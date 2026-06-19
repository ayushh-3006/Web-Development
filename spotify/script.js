import * as lucide from "lucide"

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons()
})


document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  // Enable horizontal scrolling with the mouse wheel
  const featureGrid = document.querySelector(".feature-grid");

  featureGrid.addEventListener("wheel", (event) => {
      event.preventDefault(); // Prevent default vertical scrolling
      featureGrid.scrollBy({
          left: event.deltaY < 0 ? -100 : 100, // Scroll left or right based on wheel direction
          behavior: "smooth", // Smooth scrolling
      });
  });
});