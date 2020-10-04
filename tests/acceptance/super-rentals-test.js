import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Super Rentals');
    assert.dom('.jumbo a ~ a.button').hasText('About');
    
    await click('.jumbo a ~ a.button');
    assert.equal(currentURL(), '/about');
    
  });
});
