import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: false,
  authToken: Ember.computed.alias('currentUser.authToken'),
  isSignedIn: Ember.computed.alias('currentUser'),
  attemptedTransition: "",

  init: function() {
    if (localStorage.currentUser) {
      this.pushCurrentUser(JSON.parse(localStorage.currentUser));
    }
  },

  pushCurrentUser: function(userAttributes) {
    let user = Ember.Object.create(userAttributes);
    this.set('currentUser', user);
  },

  create: function(username, password) {
    return Ember.$.ajax({
      url: '/auth_token',
      method: 'post',
      data: {
        username: username,
        password: password
      }
    }).done((response) => {
      this.pushCurrentUser(response.user);
      localStorage.currentUser = JSON.stringify(response.user);
    });
  },

  destroy: function() {
    localStorage.removeItem('currentUser');
    this.set('currentUser', false);
  }
});
