var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.css': helper.getFileBuffer('test/output.css'),
    'test/error.css': Error
  }
});
