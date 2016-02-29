import Ember from 'ember';

var url = 'colors.json';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON(url).then((data) => {
      return Ember.$.map(data.colors, function(e) { return Ember.Object.create(e); });
    });
  }
});
