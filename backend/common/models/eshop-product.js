'use strict';

module.exports = function(EshopProduct) {
  EshopProduct.withCategory = function(msg1, msg2, callback) {
    callback(null, {
      hello: 'world',
      msg1,
      msg2,
    });
  }

  EshopProduct.remoteMethod(
        'withCategory',
        {
          http: { verb: 'get' },
          accepts: [
            {arg: 'msg1', type: 'string'},
            {arg: 'msg2', type: 'string'},
          ],
          returns: {arg: 'greeting', type: 'object'}
        }
    );
};
