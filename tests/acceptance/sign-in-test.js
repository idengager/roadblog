import { test } from 'qunit';
import moduleForAcceptance from 'roadblog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sign-in');

test('visiting /sing-in', function(assert) {
  visit('/sign-in');
  andThen(() => assert.equal(currentURL(), '/sign-in'));
});

test('valid credentials', function(assert) {
  visit('/sign-in');

  click('button:submit');
  andThen(() => assert.equal(currentURL(), '/posts'));
});

test('invalid credentials', function(assert) {
  visit('/sign-in');

  click('button:submit');
  andThen(() => {
    assert.equal(currentURL(), '/sign-in');
    assert.equal(findWithAssert('.error-message'), true);
    assert.equal(find('.error-message').text(), 'Invalid username or password!');
  });
});
