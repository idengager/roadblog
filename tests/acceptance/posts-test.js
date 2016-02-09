import { test } from 'qunit';
import { currentSession, authenticateSession, invalidateSession } from 'roadblog/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'roadblog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts');

test('visiting /posts', function(assert) {
  authenticateSession(Roadblog, { user: { auth_token: '1234' }});

  visit('/posts');

  andThen(function() {
    assert.equal(currentURL(), '/posts');
    findWithAssert('h2#title');
  });
});

test('visiting /posts/:id/', function(assert) {
  server.createList('post', 3);
  authenticateSession(Roadblog, { user: { auth_token: '1234' }});

  visit('/posts');
  click('ul li a:first');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1');
  });
});

test('visiting /posts/:id/edit', function(assert) {
  server.createList('post', 3);
  authenticateSession(Roadblog, { user: { auth_token: '1234' }});

  visit('/posts');
  click('ul li a:contains(edit):first');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1/edit');
  });
});

test('visiting /posts/new', function(assert) {
  authenticateSession(Roadblog, { user: { auth_token: '1234' }});

  visit('/posts');
  click('a:contains(New post)');

  andThen(function() {
    assert.equal(currentURL(), '/posts/new');
  });
});
