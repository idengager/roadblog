import Ember from 'ember';
import AuthenticatedRoute from './authenticated-route';

export default Roadblog.AuthenticatedRoute.extend({
  actions: {
    save: function(model) {
      model.save().then(() => this.transitionTo('posts.index'));
    }
  }
})
