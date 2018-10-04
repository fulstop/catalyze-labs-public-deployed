const showHeaderBackdrop = function() {
  if (!window.backdropShown) {
    $('#nav-backdrop').animate({
      top: "+=" + window.navBackdropHeight
    }, 150, function() {});
    $('#logo').animate({ width: '200' }, 150, function() {});
  }
  window.backdropShown = true;
};

const hideHeaderBackdrop = function() {
  if (window.backdropShown) {
    $('#nav-backdrop').animate({
      top: "-=" + window.navBackdropHeight
    }, 150, function() {});
    $('#logo').animate({ width: '260' }, 150, function() {});
  }
  window.backdropShown = false;
};

const setNavBackdropHeight = function() {
  var width = $(window).width();
  if (width > 743) {
    window.navBackdropHeight = 119;
  } else {
    window.navBackdropHeight = 93;
  }
};

setNavBackdropHeight();
window.backdropShown = false;

$(window).scroll(function() {
  var top = $(window).scrollTop();
  if (top > 125) {
    showHeaderBackdrop();
  } else {
    hideHeaderBackdrop();
  }
});

$(window).resize(function() {
  setNavBackdropHeight();
});
