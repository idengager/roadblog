import Ember from 'ember';

export default Roadblog.AuthenticatedRoute = Ember.Route.extend({
  redirectToLogin() {
    this.transitionTo('sign-in');
  },

  beforeModel() {
    if (!this.get('session').get('isSignedIn')) {
      this.redirectToLogin();
    }
  }
});
