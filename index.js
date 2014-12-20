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
    left.setSoundTrigger(0.1243);
    right.setSoundTrigger(0.1113);

    car.stop(); // Just to rev the motors
    console.log('Just sitting here minding my own business...');

    // When we get a sound, on either side, run away
    left.on('sound-trigger', function(data) {
      console.log('Left triggered', data);
      car.right();
      setTimeout(function () {
        setTimeout(function () {
          car.stop();
        }, 500);
      }, 500);
    });
    right.on('sound-trigger', function (data) {
      console.log('Right triggered', data);
      car.left();
      setTimeout(function () {
        car.back();
        setTimeout(function () {
          car.stop();
        }, 500);
      }, 500);
    });
  });
});
