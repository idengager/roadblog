import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  beforeModel() {
    this._super(...arguments);
    this.get('session').invalidate();
    this.transitionTo('sign-in');
  }
});
