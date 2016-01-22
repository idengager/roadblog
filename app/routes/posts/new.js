import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post', {});
  },

  actions: {
    save: function(model) {
      model.save().then(() => this.transitionTo('posts.index'));
    }
  }
})
