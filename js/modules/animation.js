
import 'is-in-viewport';
import jQuery from 'jquery';
var $animation_elements = jQuery('[data-animation]');
var $window = jQuery(window);

function check_if_in_view() {
  $animation_elements.each(function() {
    const $self = jQuery(this);
    const animation = $self.data('animation');
    const animateType = $self.data('animate');
    const delay = Number($self.data('animation-delay') || 0);
    const timeline = $self[0].tl
    const counter = $self[0].counter
    if($self.is(':in-viewport')) {
      setTimeout(() => {
        if (animateType) _.animateRun($self, animateType);
        else $self.addClass('visible ' + animation);
        if (timeline) {
          timeline.play();
        }
      }, delay);
    } else {
      if (timeline && timeline.progress() > 0) {
        timeline.pause();
      }
      if (counter) {
        counter.reset();
      }
    }
  });
}
$window.on('scroll resize load', check_if_in_view);
$window.trigger('scroll resize load', check_if_in_view);