var CleanCSS = require('clean-css');

module.exports = function (file, options, cb) {
  try {
    var res = (new CleanCSS(options)).minify(file.buffer.toString());
    var errorMessage = res.errors.concat(res.warnings).join('\n');
    if (errorMessage) throw new Error(errorMessage);
    cb(null, {buffer: new Buffer(res.styles + '\n')});
  } catch (er) { return cb(er); }
};
