

import { gsap } from 'gsap';
const Uifade = {
  $contact: null,
  init() {
    const _ = this
    
    _.$speech = document.querySelectorAll('.ui-fade-open1')
    _.$wifi = document.querySelectorAll('.ui-fade')
    _.$server = document.querySelectorAll('.illustration-server')

    _.$speech.forEach(el => _.initSpeech(el))
    _.$wifi.forEach(el => _.initWifi(el))
    _.$server.forEach(el => _.initServer(el))
  },
  initSpeech($el) {
    const tl = gsap.timeline({ repeat: -1 })
    const images = $el.querySelectorAll('path, linearGradient, rect')

    tl.to(images[0], { opacity: 1, duration: 0.5 })
    tl.to(images[0], { opacity: 1, duration: 0.5 }, '>')
    tl.to(images[1], { opacity: 1, duration: 0.5 }, '+=0.1')
    tl.to(images[2], { opacity: 1, duration: 0.5 }, '+=0.1')
    tl.to(images[3], { opacity: 1, duration: 0.5 }, '+=0.1')
    tl.to(images[4], { opacity: 1, duration: 0.5 }, '+=0.1')
    tl.to(images[5], { opacity: 1, duration: 0.5 }, '+=0.1')

    tl.to(images[1], { opacity: 0, duration: 0.5 }, '+=1')
    tl.to(images[2], { opacity: 0, duration: 0.5 }, '<+=1')
    tl.to(images[3], { opacity: 0, duration: 0.5 }, '<+=1')
    tl.to(images[4], { opacity: 0, duration: 0.5 }, '<+=1')
    tl.to(images[5], { opacity: 0, duration: 0.5 }, '<+=1')

  },
  initWifi($el) {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.25 })
    const images = $el.querySelectorAll('path')

    tl.to(images[0], { opacity: 1, duration: 0.5 })
    tl.to(images[0], { opacity: 1, duration: 0.5 }, '>')
    tl.to(images[0], { opacity: 1, duration: 0.5 }, '+=0')
    tl.to(images[1], { opacity: 1, duration: 0.5 }, '+=0')
    tl.to(images[2], { opacity: 1, duration: 0.5 }, '+=0')
    
    tl.to(images[1], { opacity: 0, duration: 0.5 }, '+=0.5')
    tl.to(images[2], { opacity: 0, duration: 0.5 }, '<+=0.5')
    tl.to(images[3], { opacity: 0, duration: 0.5 }, '<+=0.5')
  },
  initServer($el) {
    const tl = gsap.timeline({ repeat: -1 })
    const images = $el.querySelectorAll('img')

    tl.to(images[1], { opacity: 1, duration: 0.2 })
    tl.to(images[1], { opacity: 0, duration: 0.2 }, '+=0.5')
  }
}
export default Uifade;


