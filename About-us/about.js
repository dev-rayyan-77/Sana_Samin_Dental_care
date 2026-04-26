gsap.registerPlugin( ScrollTrigger );

// ── 1. HERO HEADING — slide up + fade on load ──────────────────────────────
gsap.from(".heading", {
    x: 60,
    opacity: 0,
    duration: 1.1,
    ease: "bounce.in",
    delay: 0.2,
}); 


// Animate the text box (slides from left)
gsap.from(".our-story-section .our-story-word-box", {
  scrollTrigger: {
    trigger: ".our-story-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: -80,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
});

// Animate the image (slides from right)
gsap.from(".our-story-section .col-md-5:last-child", {
  scrollTrigger: {
    trigger: ".our-story-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: 80,
  opacity: 0,
  duration: 0.9,
  delay: 0.2,
  ease: "power3.out",
});