module.exports = function(app) {
  app.dataSources.mysqlds.autoupdate('EshopCategory', function(err) {
    const { EshopCategory } = app.models;
    if (!EshopCategory) { return; }

    EshopCategory.count({}, function(err, count) {

      if (count === 0) {
        EshopCategory.create([
          {
            name: 'Car',
          },
          {
            name: 'Bike',
          }
        ], function(err, categories) {
          if (err) throw err;

          console.log('Models created: \n', categories);
        });
      }
    })
  });

  app.dataSources.mysqlds.autoupdate('EshopProduct', function(err) {
    const { EshopProduct } = app.models;
    if (!EshopProduct) { return; }

    EshopProduct.create([
        {
          title: 'Škoda Superb',
          price: 750000,
          shortInfo: 'Luxury car produced in the Czech Republic.',
        },
        {
          title: 'Ford Focus',
          price: 600000,
          shortInfo: 'Sports car made in USA.',
        },
        {
          title: 'Moped',
          price: 1000,
          shortInfo: 'No comment.',
        },
    ], function(err, products) {
      if (err) throw err;

      console.log('Models created: \n', products);
    });
  });
};
