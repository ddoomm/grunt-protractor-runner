var exec = require('child_process').execSync;

exports.testArgsList = function (test) {
    var runnerStdOut = exec('grunt protractor:testArgsList --verbose');
    if (typeof runnerStdOut === 'object'){
        runnerStdOut = runnerStdOut.toString();
    }
    if (runnerStdOut.indexOf('Spawn node with arguments:') > -1 && runnerStdOut.indexOf('--grep #mytag') > -1) {
        test.ok(true, 'grep option test passed');
        test.done();
    } else {
        test.ok(false, 'grep option not found');
        test.done();
    }
};

exports.testWithoutArgsList = function (test) {
  var runnerStdOut = exec('grunt protractor:testWithoutArgsList --verbose');
  if (typeof runnerStdOut === 'object'){
    runnerStdOut = runnerStdOut.toString();
  }
  if (runnerStdOut.indexOf('Spawn node with arguments:') > -1 && runnerStdOut.indexOf('--grep') === -1) {
    test.ok(true, 'grep option is absent as expected');
    test.done();
  } else {
    test.ok(false, 'grep option should be absent');
    test.done();
  }
};
