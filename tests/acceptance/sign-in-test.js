import { test } from 'qunit';
import moduleForAcceptance from 'roadblog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sign-in');

test('visiting /sing-in', function(assert) {
  visit('/sign-in');
  andThen(() => assert.equal(currentURL(), '/sign-in'));
});

test('valid credentials', function(assert) {
  visit('/sign-in');

  fillIn('input#username', 'admin');
  fillIn('input#password', 'password');
  click('button:submit');
  andThen(() => {
    assert.equal(currentURL(), '/posts');
    assert.ok(find('.error-message').length === 0);
  });
});

test('invalid credentials', function(assert) {
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
