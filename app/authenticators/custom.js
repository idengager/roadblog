import Ember from 'ember';
import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

const { RSVP, isEmpty, run, get } = Ember;

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: '/auth_token',
  tokenAttributeName: 'auth_token',

  restore(data) {
    const userData = get(data, 'user');
    return new RSVP.Promise((resolve, reject) => {
      if (!isEmpty(userData)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(identification, password) {
    return new RSVP.Promise((resolve, reject) => {
      const data = {};

      data[password] = password;
      data['username'] = identification;

      this.makeRequest(data).then(function(response) {
        run(null, resolve, response);
      }, function(xhr) {
        run(null, reject, xhr.responseJSON || xhr.responseText);
      });
    });
  }
});
