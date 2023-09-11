var isInViewport = require('../../node_modules/isinviewport/isInViewport');

window.onscroll = function() {
  isInViewport.inView(document.querySelectorAll('.banner-section'), function(el){
    $(el).addClass('zoomIn');
  });
}