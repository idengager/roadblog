import { test } from 'qunit';
import moduleForAcceptance from 'roadblog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts');

test('visiting /posts', function(assert) {
  visit('/posts');

  andThen(function() {
    assert.equal(currentURL(), '/posts');
    findWithAssert('h2#title');
  });
});

test('visiting /posts/:id/', function(assert) {
  let posts = server.createList(3);

  visit('/posts');
  click('a:contains(posts[0].title)');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1');
  });
});
