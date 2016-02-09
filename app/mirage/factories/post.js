import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: faker.lorem.sentence,
  body: faker.lorem.paragraph,
  created_at: faker.date.past,
  updated_at: faker.date.recent
});
