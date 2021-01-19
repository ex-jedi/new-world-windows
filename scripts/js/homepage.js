// *==============================================================================
// ** Imports  **
// *==============================================================================

import * as Flickity from 'flickity';
import 'flickity-imagesloaded';
import { homepageParallax } from './animations';
import { displayInstagramFeed, cookieWarning } from './utils';
import { menuOpenerHandler, mainNavTrigger } from './lib';

// *==============================================================================
// ** Page JS  **
// *==============================================================================

// ********** Flickity **********
const carousel = document.querySelector('.main-carousel');
const flkty = new Flickity(carousel, {
  imagesLoaded: true,
  autoPlay: 10000,
  prevNextButtons: false,
  wrapAround: true,
  selectedAttraction: 0.006,
  friction: 0.15,
});

// *==============================================================================
// ** Imported  **
// *==============================================================================

// ********** Homepage Parallax **********

homepageParallax();

// ********** Instagram Feed **********

displayInstagramFeed();

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);

// ********** Cookie Warning **********

cookieWarning();
