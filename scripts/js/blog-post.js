// *==============================================================================
// ** Imports  **
// *==============================================================================

import { reframe, cookieWarning } from './utils';
import { menuOpenerHandler, mainNavTrigger } from './lib';

// ********** Instagram Feed **********

// ********** Reframe **********
reframe('.blog-video-embed iframe');

// ********** Main Nav **********
mainNavTrigger.addEventListener('click', menuOpenerHandler);

// ********** Cookie Warning **********

cookieWarning();
