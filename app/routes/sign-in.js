import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  actions: {
    submit(username, password) {
      let session = this.get('session');

      session.create(username, password).done(() => {
        this.set('controller.errorMessage', false);
        this.transitionTo('index');
      }).fail(() => {
        this.set('controller.errorMessage', "Invalid username or password!");
      });
    }
  }
});
