'use strict';

module.exports = function(EshopProduct) {
  EshopProduct.withCategory = function(id, msg2, callback) {

    EshopProduct.find({ include: 'category', where: { id }}, function(err, products) {
      if (err) { return callback(err); }

      callback(null, products);
    })
  }

  EshopProduct.remoteMethod(
      'withCategory',
      {
        accepts: [
          {arg: 'msg1', type: 'id'},
          {arg: 'msg2', type: 'string'},
        ],
        http: {
          verb: 'get',
        },
        returns: {arg: 'products', type: '[EshopProduct]', root: true},
      }
  );
};
