// ********** GSAP **********
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

// ********** Homepage Parallax Image **********

function homepageParallax() {
  gsap.fromTo(
    '.parallax-image',
    { yPercent: -40 },
    {
      yPercent: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-image-section',
        start: 'top bottom',
        end: 'bottom',
        scrub: true,
      },
    }
  );
}

export { homepageParallax };
