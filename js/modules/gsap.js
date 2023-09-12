import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

// Now you can use gsap to create animations
const photo = document.getElementById("photo");

gsap.to(photo, {
  duration: 2,
  width: "200px",
  height: "150px",
});
