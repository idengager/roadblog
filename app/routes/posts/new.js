import Ember from 'ember';
import AuthenticatedRoute from './authenticated-route';

export default Roadblog.AuthenticatedRoute.extend({
  session: Ember.inject.service('session'),
  
  model: function() {
    return this.store.createRecord('post', {});
  },

  actions: {
    save: function(model) {
      model.save().then(() => this.transitionTo('posts.index'));
    }
  }
})
