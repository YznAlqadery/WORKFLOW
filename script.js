const images = document.querySelectorAll(".img");
const nav = document.querySelector(".nav_links");

images.forEach((img) => {
  img.addEventListener("mouseover", function (e) {
    const currentElement = e.currentTarget;
    const hoveredImg = currentElement.dataset.img;
    if (currentElement.classList.contains("img")) {
      currentElement.src = `assets/images/${hoveredImg}-hover.jpg`;
    }
  });
  img.addEventListener("mouseout", function (e) {
    const currentElement2 = e.currentTarget;
    const hoveredImg2 = currentElement2.dataset.img;
    if (currentElement2.classList.contains("img")) {
      currentElement2.src = `assets/images/${hoveredImg2}-theme.jpg`;
    }
  });
});

nav.addEventListener("click", function (e) {
  e.preventDefault();
  const currentElement = e.target;
  if (currentElement.classList.contains("link_tag")) {
    const href = currentElement.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
});
