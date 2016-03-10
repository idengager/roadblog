import { test } from 'qunit';
import { authenticateSession } from 'roadblog/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'roadblog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts');

test('visiting /posts when not signed in redirects to sign in form', (assert) => {
  visit('/posts');

  andThen(() => {
    assert.equal(currentURL(), '/sign-in')
  });
});

test('visiting /posts when signed in', (assert) => {
  authenticateSession(Roadblog, { user: { auth_token: '1234' }});

  visit('/posts');

  andThen(() => {
    assert.equal(currentURL(), '/posts');
    findWithAssert('h2#title');
  });
});

test('visiting /posts/:id/', (assert) => {
  server.createList('post', 3);
  authenticateSession(Roadblog, { user: { auth_token: '1234' }});

  visit('/posts');
  click('ul li a:first');

  andThen(() => {
    assert.equal(currentURL(), '/posts/1');
  });
});

test('trying to access a non-existent post show page', (assert) => {
  authenticateSession(Roadblog, { user: { auth_token: '1234' }});

  visit('/posts/non-existent');
  andThen(() => {
    assert.equal(currentURL(), '/posts/non-existent');
    findWithAssert('div.error-message');
  });
});

test('visiting /posts/:id/edit', (assert) => {
  server.createList('post', 3);
  authenticateSession(Roadblog, { user: { auth_token: '1234' }});

  visit('/posts');
  click('ul li a:contains(edit):first');

  andThen(() => {
    assert.equal(currentURL(), '/posts/1/edit');
  });
});

test('visiting /posts/new', (assert) => {
  authenticateSession(Roadblog, { user: { auth_token: '1234' }});

  visit('/posts');
  click('a:contains(New post)');

  andThen(() => {
    assert.equal(currentURL(), '/posts/new');
  });
});
