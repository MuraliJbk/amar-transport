
document.addEventListener("DOMContentLoaded", function(){
  var myWave = wavify(document.querySelector('.wave'), {
    height: 40,
    bones: 40,
    amplitude: 20,
    color: '#E9F6FC',
    speed: 0.25,
  });
});
