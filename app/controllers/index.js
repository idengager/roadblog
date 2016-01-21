import 'ember'

export default Ember.Controller.extend({
  colorCount: Ember.computed("model.[]", function() {
    var colors = this.get('model');
    return colors.get('length');
  })
});
