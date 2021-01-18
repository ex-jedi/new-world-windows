// *==============================================================================
// ** Imports  **
// *==============================================================================

import { displayInstagramFeed, cookieWarning } from './utils';
import { menuOpenerHandler, mainNavTrigger } from './lib';

// ********** Instagram Feed **********
displayInstagramFeed();

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);

// ********** Cookie Warning **********

cookieWarning();
