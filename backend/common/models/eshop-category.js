'use strict';

module.exports = function(EshopCategory) {
  EshopCategory.observe('before save', function limitToTenant(ctx, next) {
    const { instance } = ctx;

    if (instance) {
      const { id } = instance;
      if (!id) {
        instance.createdAt = new Date();
      }
    }
    
    next();
  });

};
