// Load the hardware
require('tesselate') ({
  modules: {
    A: ['ambient-attx4', 'ambientL'],
    C: ['ambient-attx4', 'ambientR']
  },
}, function(tessel, modules) {
  var left = modules.ambientL;
  var right = modules.ambientR;
  var car = require('servo-car').use(tessel.port['B'], function () {
    // Start the device (define trigger values in this function, below)
    reset();
    console.log('Just sitting here minding my own business...');

    // When we get a sound, on either side, run away
    left.on('sound-trigger', function(data) {
      left.clearSoundTrigger();
      console.log('Left triggered', data);
      car.right();
      setTimeout(function () {
        setTimeout(function () {
          reset();
        }, 500);
      }, 500);
    });
    right.on('sound-trigger', function (data) {
      right.clearSoundTrigger();
      console.log('Right triggered', data);
      car.left();
      setTimeout(function () {
        car.back();
        setTimeout(function () {
          reset();
        }, 500);
      }, 500);
    });

    // Once we've reacted, stop running and wait for triggers again
    function reset () {
      car.stop();
      left.setSoundTrigger(0.1243);
      right.setSoundTrigger(0.1113);
    }
  });
});
