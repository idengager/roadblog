import Ember from 'ember';
import DeviseAuthorizer from 'ember-simple-auth/authorizers/devise';

const { isEmpty, get } = Ember;

export default DeviseAuthorizer.extend({
  tokenAttributeName: 'auth_token',
  identificationAttributeName: 'user',

  authorize(data, block) {
    const tokenAttributeName = this.get('tokenAttributeName');
    const userData = get(data, 'user');
    const userToken          = get(userData, tokenAttributeName);
    if (!isEmpty(userToken)) {
      block('X-Token', userToken);
    }
  }
});
