//looks like all subroutes are added to this big route file

const noteRoutes = require('./note_routes');
const restaurantRoutes = require('./restaurant_routes');
const lodgingRoutes = require('./lodging_routes');

module.exports = function(app, db) {
  noteRoutes(app, db);
  restaurantRoutes(app, db);
  lodgingRoutes(app, db);
  // Other route groups could go here, in the future
};