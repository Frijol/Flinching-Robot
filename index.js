require('tesselate') ({
  modules: {
    A: ['ambient-attx4', 'ambientL'],
    C: ['ambient-attx4', 'ambientR']
  },
}, function(tessel, modules) {
  var left = modules.ambientL;
  var right = modules.ambientR;
  var car = require('servo-car').use(tessel.port['B'], function () {
    console.log('Ready.')

    var leftTriggered = false;
    var rightTriggered = false;

    reset();
    console.log('Just sitting here minding my own business...');

    left.on('sound-trigger', function(data) {
      console.log('Left triggered', data);
      leftTriggered = true;
      car.right();
      setTimeout(function () {
        setTimeout(function () {
          reset();
        }, 500);
      }, 500);
    });
    right.on('sound-trigger', function (data) {
      console.log('Right triggered', data);
      rightTriggered = true;
      car.left();
      setTimeout(function () {
        car.back();
        setTimeout(function () {
          reset();
        }, 500);
      }, 500);
    });

    function react () {
      clearInterval(usual);
      if (leftTriggered) {
        car.right();
        setTimeout(function () {
          reset();
        }, 500);
      } else if (rightTriggered) {
        car.left();
        setTimeout(function () {
          reset();
        }, 500);
      }
    }

    function reset () {
      car.stop();
      leftTriggered = false;
      rightTriggered = false;
      left.setSoundTrigger(0.1243);
      right.setSoundTrigger(0.1113);
    }
  });
});
