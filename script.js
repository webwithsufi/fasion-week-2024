let menu = document.querySelector("#left-top-right i");
let cross = document.querySelector("#nav i");

let tl = gsap.timeline({
  paused: true,
});

tl.to("#nav", {
  top: 0,
  ease: Expo.easeInOut,
});

tl.from("#nav h5", {
  delay: 0.8,
  x: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});
tl.from("#nav i", {
  x: 50,
  opacity: 0,
});

menu.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
});
