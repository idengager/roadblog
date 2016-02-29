export default function() {}

export function testConfig() {
  this.get('/posts');
  this.get('/posts/non-existent', {}, 404);
}
