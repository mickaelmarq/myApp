angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      f = [];

      for (var i = 0; i < 1000; i++) {
        f.push({ id: i, name: "Bobi "+i });
      }

      return f;
    },
    get: function(friendId) {
      // Simple index lookup
      return f[friendId];
    }
  }
});
