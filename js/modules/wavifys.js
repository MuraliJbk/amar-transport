document.addEventListener("DOMContentLoaded", function() {
  const myWave = document.querySelectorAll('.wave');
  myWave.forEach(function(wave, index) {
    wavify(wave, {
      height: 40,
      bones: 40,
      amplitude: 20,
      color: '#E9F6FC',
      speed: 0.25,
    });
  });
});
