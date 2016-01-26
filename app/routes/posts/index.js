import Ember from 'ember';
import AuthenticatedRoute from './authenticated-route';

export default Roadblog.AuthenticatedRoute.extend({
  session: Ember.inject.service('session'),
  
  model: function(params) {
    return this.store.findAll('post');
  }
});
