import { gsap} from "gsap";
import {DrawSVGPlugin} from './DrawSVGPlugin.min.js'
gsap.registerPlugin(DrawSVGPlugin)

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

// data-animation for left right fades
var gsap_elements = jQuery('[data-animation]');
gsap_elements.each(function () {
    const _gself = jQuery(this);
    const _gclass = _gself.data('animation');
    var tl = gsap.timeline({ paused: true });
    switch (_gclass) {
        case 'gsap-left':
            tl.fromTo(_gself[0], { x: -50, transition: 'none' }, { x: 0, duration: 1.5, ease: 'power1.out' });
            break;
        case 'gsap-right':
            tl.fromTo(_gself[0], { x: 50, transition: 'none' }, { x: 0, duration: 1.5, ease: 'power1.out' });
            break;
        case 'gsap-up':
            tl.fromTo(_gself[0], { y: 25, transition: 'none' }, { y: 0, duration: 1.5, ease: 'power1.out' });
            break;
        case 'gsap-down':
            tl.fromTo(_gself[0], { y: -25, transition: 'none' }, { y: 0, duration: 1.5, ease: 'power1.out' });
            break;
        default: break;
    }
    _gself[0].tl = tl;
});

// data-animation for paths
var _ui = jQuery("[data-animation='ui-ele']");
_ui.each(function(){
    var $self = jQuery(this);
    var _paths = $self.find("mask path");
    var isAsync = $self.attr('data-animation-async')
    var isLong = 0.25
    var tl = gsap.timeline({ paused: true, delay: 0.25, })
    _paths.each(function(i){
        tl.fromTo(jQuery(this)[0], { drawSVG: '0%' }, { drawSVG: '100%', duration: isLong ? 2 : 1, ease: 'power1.out' }, i === 0 ? '<' : isAsync ? '>-0.5' : '>-0.75')
    })
    $self[0].tl = tl
});

// data-animation for rotate svgs
var lastScrollTop = 0;
var _uiRotate = jQuery("[data-animation='ui-rotate']");
_uiRotate.each(function() {
    var $self = jQuery(this);
    var tlOn = gsap.timeline({ paused: true, delay: 0.75 });
    tlOn.fromTo($self[0], { rotate: 0, opacity: 1, transition: 'none' }, { rotate: 360, opacity: 0.5, duration: 50, ease: 'power1.out' });
    $self[0].tlOn = tlOn;
});
jQuery(window).on("scroll load", function() {
    var _scroll = jQuery(this).scrollTop();
    _uiRotate.each(function() {
        var $self = jQuery(this);
        var elementTop = $self.offset().top;
        var w_height = $(window).height();
        if (_scroll > lastScrollTop && elementTop < (_scroll + w_height)) {
            $self[0].tlOn.play();
        } else {
            $self[0].tlOn.pause(true);
        }
    });
    lastScrollTop = _scroll;
});
