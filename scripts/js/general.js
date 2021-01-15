// *==============================================================================
// ** Imports  **
// *==============================================================================

import { displayInstagramFeed } from './utils';
import { menuOpenerHandler, mainNavTrigger } from './lib';

// ********** Instagram Feed **********
displayInstagramFeed();

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);
