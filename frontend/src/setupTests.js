var unexpected = require('unexpected');
var ReactTestUtils = require('react-addons-test-utils');

function getHackedVersionOfUexpectThatWorksWithJest() {
  let expect;
  function uexpect(...args) {
    if (!expect) {
      var unexpectedReact = require('unexpected-react');
      expect = unexpected.clone().use(unexpectedReact);
    }

    try {
      return expect.apply(this, args);
    } catch (e) {
      const errorThatWorksWithJest = new Error(e.message);
      Error.captureStackTrace(errorThatWorksWithJest, uexpect);
      throw errorThatWorksWithJest;
    }
  }

  return uexpect;
}

const uexpect = getHackedVersionOfUexpectThatWorksWithJest();

global.uexpect = uexpect;
