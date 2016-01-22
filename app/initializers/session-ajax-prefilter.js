import Ember from 'ember';

export function initialize(container, application) {
  let ajaxPrefilter = function(options, originalOptions, xhr) {
    let authToken = "oRtSgV5asyHYB2ZuxLYayWfK"; // auth_token from Rails user

    if (authToken) {
        options.headers = { 'X-Token' : authToken };
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
