import Ember from 'ember';

export default Ember.Component.extend({
  fullName: function() {
    return "Color " + this.get('color.name');
  }.property("color.name"),

  click: function() {
    this.sendAction("actionname", this.get('fullName'));
  }
});
