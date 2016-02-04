import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  actions: {
    submit(username, password) {
      let session = this.get('session');

      session.create(username, password).then(() => {
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
