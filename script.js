gsap.registerPlugin(ScrollTrigger);

const product = document.querySelector(".product");
const text = document.querySelector(".content");

const animation = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=900",
    scrub: 0.7,
    pin: true,
    anticipatePin: 1
  }
});

animation
  .to(text, {
    x: -150,
    opacity: 0,
    duration: 0.7
  })

  .to(product, {
    scale: 1.15,
    duration: 0.7
  }, "<")

  .to(product, {
    x: "-20vw",
    rotation: -8,
    duration: 0.8
  })

  .to(product, {
    x: "35vw",
    y: "-15vh",
    scale: 0.7,
    rotation: 12,
    opacity: 0,
    duration: 0.8
  });


/* Disable heavy animation on very weak phones */

if (window.innerWidth <= 480) {

  ScrollTrigger.getAll().forEach(trigger => {
    trigger.vars.scrub = 1;
  });

}
