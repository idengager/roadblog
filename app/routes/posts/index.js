import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  model: function(params) {
    return this.store.findAll('post');
  }
});
