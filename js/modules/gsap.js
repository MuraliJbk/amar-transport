import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(ScrollTrigger);

// scroller polygon icon
let scroller = jQuery(".scroller_icon");
scroller.each(function(){
    const _self = jQuery(this);
    const _path = _self.find('svg path');
    const start = "M41 52.5L10 2.5L72 2.5L41 52.5Z";
    const end = "M41 53.5L10 3.5L72 4.5L41 53.5Z";
    gsap.timeline({ 
        repeat: -1,
        repeatDelay: 0.5,
    }).fromTo(_path[0], { y: -25, attr: { d: end }}, { y: 0, attr: { d: start }, duration: 2, ease: 'bounce.out'})
});

// data-animation
var gsap_elements = jQuery('[data-animation]');
gsap_elements.each(function() {
    const _gself = jQuery(this);
    const _gclass = _gself.data('animation');
    if(_gclass === 'gsap-left') {
        var tl= gsap.timeline({ paused: true })
        tl.fromTo(_gself[0], { x: -50, transition: 'none'}, { x: 0, duration: 1.5, ease: 'power1.out'})
        _gself[0].tl = tl
    }
    if(_gclass === 'gsap-right') {
        var tl = gsap.timeline({ paused: true })
        tl.fromTo(_gself[0], { x: 50, transition: 'none'}, { x: 0, duration: 1.5, ease: 'power1.out'})
        _gself[0].tl = tl
    }
    if(_gclass === 'gsap-up') {
        var tl = gsap.timeline({ paused: true })
        tl.fromTo(_gself[0], { y: 25, transition: 'none'}, { y: 0, duration: 1.5, ease: 'power1.out'})
        _gself[0].tl = tl
    }
    if(_gclass === 'gsap-down') {
        var tl = gsap.timeline({ paused: true })
        tl.fromTo(_gself[0], { y: -25, transition: 'none'}, { y: 0, duration: 1.5, ease: 'power1.out'})
        _gself[0].tl = tl
    }

});


