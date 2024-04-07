import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
  const isSmallDevice = window.innerWidth < 768; // Assuming small devices have a width less than 768px
  const scroll = scrollProps
    ? scrollProps
    : {
        scrollTrigger: {
          trigger: target,
          start: "top bottom-=5%", // Adjusted start position for small devices
          toggleActions: "restart reverse restart reverse", // Adjusted toggle actions for small devices
          end: "bottom top+=20%",
        },
      };

  gsap.to(target, {
    ...animationProps,
    ...scroll,
  });
};

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power1.inOut",
  });

  timeline.to(firstTarget, { ...animationProps, ease: "power2.inOut" }, "<");

  timeline.to(secondTarget, { ...animationProps, ease: "power2.inOut" }, "<");
};
