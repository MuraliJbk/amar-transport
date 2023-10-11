
let $counter_elements = jQuery("[data-counter-main]");
let $cwindow = jQuery(window);
let animation_started = false;

function check_if_view() {
  let window_height = $cwindow.height()
  let window_top_position = $cwindow.scrollTop();
  let window_bottom_position = window_top_position + window_height;

  $counter_elements.each(function() {
    let $element = jQuery(this);
    let element_height = $element.outerHeight();
    let element_top_position = $element.offset().top;
    let element_bottom_position = element_top_position + element_height;

    if (
      (element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position) &&
      !animation_started
    ) {
      animation_started = true;

      $element.find(".counter").each(function() {
        let $this = jQuery(this);
        let countTo = parseInt($this.attr("data-count-to"));
        let countDuration = parseInt($this.attr("data-duration"));

        jQuery({ counter: 0 }).animate(
          {
            counter: countTo
          },
          {
            duration: countDuration,
            // easing: "easein",
            step: function() {
              $this.text(Math.floor(this.counter));
            },
            complete: function() {
              $this.text(this.counter);
            }
          }
        );
      });
    }
  });
}
$cwindow.on("scroll load", check_if_view);
$cwindow.trigger("scroll load");

let animationPaused = false; // Variable to track animation state

jQuery('.short-intro-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  // Pause counter animations here
  if (!animationPaused) {
    animationPaused = true; // Set the animation state to paused
    $counter_elements.find(".counter").stop(); // Stop the animations
  }
});

jQuery('.short-intro-slider').on('afterChange', function(event, slick, currentSlide) {
  // Resume counter animations here
  if (animationPaused) {
    animationPaused = false; // Set the animation state to not paused
    $counter_elements.find(".counter").each(function () {
      let $this = jQuery(this);
      let countTo = parseInt($this.attr("data-count-to"));
      let countDuration = parseInt($this.attr("data-duration"));

      jQuery({ counter: 0 }).animate(
        {
          counter: countTo
        },
        {
          duration: countDuration,
          step: function () {
            $this.text(Math.floor(this.counter));
          },
          complete: function () {
            $this.text(this.counter);
          }
        }
      );
    });
  }
});
