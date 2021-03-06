// *=========================================
// ** Main Nav  **
// *=========================================

const mainNavTrigger = document.querySelector('.main-nav-trigger');
const mainNav = document.querySelector('.main-nav');

// * Open menu

function menuOpenerHandler() {
  if (mainNav.dataset.state === 'closed') {
    mainNav.classList.add('main-nav-reveal');
    mainNav.dataset.state = 'open';
    mainNavTrigger.textContent = 'CLOSE MENU';
  } else {
    mainNav.classList.remove('main-nav-reveal');
    mainNav.dataset.state = 'closed';
    mainNavTrigger.textContent = 'OPEN MENU';
  }
}

// *=========================================
// ** Exports  **
// *=========================================

export { menuOpenerHandler, mainNavTrigger, mainNav };
