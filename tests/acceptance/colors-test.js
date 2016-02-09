import { test } from 'qunit';
import moduleForAcceptance from 'roadblog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | colors');

test('visiting /index', function(assert) {
  // TODO
  // add data via mirage's fixtures
  // this test currently times out/passes randomly
  visit('/');

  andThen(() => assert.equal(currentURL(), '/'));
});
