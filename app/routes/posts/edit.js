import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  actions: {
    save: function(model) {
      model.save().then(() => this.transitionTo('posts.index'));
    }
  }
});
