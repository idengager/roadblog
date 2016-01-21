import 'ember'

export default Ember.Component.extend({
  fullName: function() {
    return "Color " + this.get('color.name');
  }.property("color.name"),
});
