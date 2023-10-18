
document.addEventListener("DOMContentLoaded", function() {
  const myWave = document.querySelectorAll('.seaport-wave');
  myWave.forEach(function(wave, index) {
    wave.wavify({
      height: 40,
      bones: 40,
      amplitude: 20,
      color: '#E9F6FC',
      speed: 0.25,
    });
  });
});
