import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  actions: {
    submit(username, password) {
      this.get('session').authenticate('authenticator:custom', username, password).then(() => {
        Ember.run(() => {
          this.set('controller.errorMessage', false);
          this.transitionTo('posts');
        });
      }, (() =>
        Ember.run(() => {
          this.set('controller.errorMessage', 'Invalid username or password!');
        })
      ));
    }
  }
});
