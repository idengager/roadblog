import { test } from 'qunit';
import moduleForAcceptance from 'roadblog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | colors');

test('visiting /index', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/');
  });
});
