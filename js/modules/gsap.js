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

// scroller polygon icon
let btnSvg = jQuery(".btn-link");
btnSvg.each(function(){
    const _self = jQuery(this);
    const _path = _self.find('svg path');
    const start = "M41 3L36 0.113249V5.88675L41 3ZM0 3.5H36.5V2.5H0V3.5Z";
    const end = "M41 3L26 0.113249V5.88675L41 3ZM0 3.5H36.5V2.5H0V3.5Z";
    var btnAnimation = gsap.timeline({ 
        repeat: -1,
        repeatDelay: 1,
    }).fromTo(_path[0], { x: -100, attr: { d1: start }}, { x: 0, attr: { d1: end }, duration: 1, ease: 'power1.out'})
    _self.on("mouseenter", function(){
        btnAnimation.reverse(0);
        btnAnimation.pause();
    });
    _self.on("mouseleave", function(){
        btnAnimation.restart();
        btnAnimation.play();
    });
});


// data-animation
var gsap_elements = jQuery('[data-animation]');
gsap_elements.each(function() {
    const _gself = jQuery(this);
    const _gclass = _gself.data('animation');
    if(_gclass === 'gsap-left') {
        var tl = gsap.timeline({ paused: true })
        tl.fromTo(_gself[0], { x: -100, transition: 'none'}, { x: 0, duration: 2, ease: 'power1.out'})
        _gself[0].tl = tl
    }
    if(_gclass === 'gsap-right') {
        var tl = gsap.timeline({ paused: true })
        tl.fromTo(_gself[0], { x: 100, transition: 'none'}, { x: 0, duration: 2, ease: 'power1.out'})
        _gself[0].tl = tl
    }
});


