// *==============================================================================
// ** Imports  **
// *==============================================================================

import * as Flickity from 'flickity';
import { homepageParallax } from './animations';
import { displayInstagramFeed } from './utils';

// *==============================================================================
// ** Page JS  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

// ********** Homepage Parallax **********

homepageParallax();

// ********** Instagram Feed **********

displayInstagramFeed();

// ********** Flickity **********
const carousel = document.querySelector('.main-carousel');
const flkty = new Flickity(carousel, {
  imagesLoaded: true,
  autoPlay: 5000,
  prevNextButtons: false,
  adaptiveHeight: true,
  wrapAround: true,
});
