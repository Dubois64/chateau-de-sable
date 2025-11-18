import { gsap } from "gsap";
gsap.to(".header-icone", {
  y: 150,
  duration: 1.5,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
});

gsap.utils.toArray(".experience-bulle-1").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 30,
    duration: 3,
    scrollTrigger: {
      trigger: el,
      start: "top 95%", // quand l'élément entre dans la vue
      toggleActions: "play none none none",
    },
  });
});

ScrollTrigger.refresh();

gsap.to("#experience-personnage-grandit-1", {
  opacity: 1,
  x: "25%",
  scrollTrigger: {
    trigger: "#experience-personnage-grandit-1",
    start: "top top",
    scrub: 1,
  },
});

gsap.to("#experience-personnage-grandit-1", {
  opacity: 1,
  x: "-25%",
  scrollTrigger: {
    trigger: "#experience-personnage-grandit-1",
    start: "center bottom",
    scrub: 1,
  },
});
