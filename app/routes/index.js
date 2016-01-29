import Ember from "ember";

var url = 'colors.json';

export default Ember.Route.extend({
  model: function() {
    return $.getJSON(url).then(function(data) {
      return $.map(data.colors, function(e) { return Ember.Object.create(e); });
    });
  }
});
