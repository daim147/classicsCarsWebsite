const videos = document.querySelectorAll(".video");
const targetEls = document.querySelectorAll(".target");
const wrappersEls = document.querySelectorAll(".wrapper");
const menue = document.querySelector(".menu");

menue.addEventListener("click", () => {
  targetEls.forEach((item) => {
    item.classList.toggle("change");
  });
});
wrappersEls.forEach((item) => {
  item.addEventListener("click", () => {
    targetEls.forEach((el) => {
      el.classList.remove("change");
    });
  });
});

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
