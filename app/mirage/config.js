export default function() {}

export function testConfig() {
  this.get('/posts');
  this.get('/posts/non-existent', {}, 404);

  var colors = {
    'colors': [
        {'name': 'red'},
        {'name': 'white'},
        {'name': 'blue'}
    ]
  };
  this.get('colors.json', colors, 200)
}
