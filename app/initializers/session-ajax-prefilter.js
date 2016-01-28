import Ember from 'ember';

export function initialize(container, application) {
  let ajaxPrefilter = function(options, originalOptions, xhr) {
    if (localStorage.currentUser) {
      let currentUser = JSON.parse(localStorage.currentUser);
      options.headers = { 'X-Token' : currentUser.auth_token };
    }
    return true;
  };

  Ember.$.ajaxPrefilter('+*', ajaxPrefilter);
}

export default {
  session: Ember.inject.service('session'),
  name: 'session-ajax-prefilter',
  initialize: initialize
};
