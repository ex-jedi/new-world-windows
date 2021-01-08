// *==============================================================================
// ** Imports  **
// *==============================================================================

import { homepageParallax } from './animations';
import { Instafeed } from './utils';
// *==============================================================================
// ** Page JS  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

// ********** Homepage Parallax **********

homepageParallax();
// Instafeed();

const feed = new Instafeed({
  accessToken:
    'IGQVJXNjVLVFFQckFRcUNMRkRDcGxVUTFzSTU1X1lsM2NLdGVXNUsySWs1NDlNclZAfZAUZAJWmEwTkxMWjJhODdyOG00Wnp3VldmdXlPSklNT1ZAXWHJjNVl2Y2txUjV5UmFiMDd2ckZAfQTI3MXFBUTdxNgZDZD',
});
feed.run();
