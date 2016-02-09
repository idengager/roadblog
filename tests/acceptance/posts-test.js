import { test } from 'qunit';
import { currentSession, authenticateSession, invalidateSession } from 'roadblog/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'roadblog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts');

test('visiting /posts', function(assert) {
  authenticateSession(Roadblog);

  visit('/posts');

  andThen(function() {
    assert.equal(currentURL(), '/posts');
    findWithAssert('h2#title');
  });
});

test('visiting /posts/:id/', function(assert) {
  let posts = server.createList(3);
  authenticateSession(Roadblog);

  visit('/posts');
  console.log(posts[0]);
  click('a:contains(posts[0].title)');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1');
  });
});
