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
