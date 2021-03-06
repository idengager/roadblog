import { test } from 'qunit';
import { currentSession, authenticateSession, invalidateSession } from 'roadblog/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'roadblog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sign-in');

test('visiting /sign-in', (assert) => {
  invalidateSession(Roadblog);
  visit('/sign-in');

  andThen(() => assert.equal(currentURL(), '/sign-in'));
});

test('signing in with valid credentials', (assert) => {
  server.post('/auth_token', () => {
    return {
      'user':{'id':1,'username':'admin','auth_token':'oRtSgV5asyHYB2ZuxLYayWfK'}
    };
  }, 201);
  visit('/sign-in');

  fillIn('input#username', 'admin');
  fillIn('input#password', 'password');
  click('button:submit');
  andThen(() => {
    assert.equal(currentURL(), '/posts');
    assert.ok(find('.error-message').length === 0);
  });
});

test('signing in with invalid credentials', (assert) => {
  server.post('/auth_token', { message: 'unauthorized' }, 401);
  visit('/sign-in');

  fillIn('input#username', 'test');
  fillIn('input#password', 'test');
  click('button:submit');
  andThen(() => {
    assert.equal(currentURL(), '/sign-in');
    findWithAssert('.error-message');
    assert.equal(find('.error-message').text(), 'Invalid username or password!');
  });
});

test('redirecting to /posts when already signed in', (assert) => {
  authenticateSession(Roadblog, { user: { auth_token: '1234' }});
  visit('/sign-in');

  andThen(() => assert.equal(currentURL(), '/posts'));
});

test('signing out', (assert) => {
  authenticateSession(Roadblog, { user: { auth_token: '1234' }});

  visit('/posts');

  click('a:contains(Sign out)');
  andThen(() => {
    assert.equal(currentURL(), '/sign-in');
    assert.equal(currentSession(Roadblog).get("isAuthenticated"), false);
  });
});
