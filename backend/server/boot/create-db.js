module.exports = function(app) {
  app.dataSources.mysqlds.automigrate('EshopProduct', function(err) {
    if (err) throw err;
    console.log('---- migrated!');
  });
}
