'use strict';

module.exports = function(EshopOrder) {
  EshopOrder.validateAsync('firstName', function firstNameValidator(errorCallback, doneCallback) {
    if (!this.firstName || this.firstName.length < 5) {
      errorCallback('tooShort');
    }

    if (this.firstName != this.lastName) {
      errorCallback('notEqualToLastName');
    }

    doneCallback();
  }, {
    message: {
      tooShort: 'is too short',
      notEqualToLastName: 'is not same as last name',
    },
  });

  EshopOrder.submit = function(itemsData, firstName, lastName, address, callback) {
    const app = require('../../server/server.js');
    const { EshopProduct, EshopOrderItem } = app.models;

    const order = EshopOrder({
      firstName,
      lastName,
      address,
    });

    order.isValid(orderIsValid => {
      let anyErrors = false;
      const errors = {};
      if (!orderIsValid) {
        anyErrors = true;
        Object.assign(errors, order.errors);
      }

      let itemsErrors = []
      if (!itemsData || itemsData.length === 0) {
        anyErrors = true;
        Object.assign(errors, { items: ['no items in order'] });
      } else {
        itemsErrors = itemsData.map(itemData => {
          const item = new EshopOrderItem(
            Object.assign({ orderId: 1 }, itemData)
          );
          if (!item.isValid()) { anyErrors = true; }
          return item.errors || {};
        });
      }
      Object.assign(errors, { itemsErrors, anyErrors });


      if (anyErrors) {
        callback({
          statusCode: 422,
          message: 'Error',
          details: {
            errors,
          },
        });
        return;
      }

      callback(null, { order });
    });
  };
};
