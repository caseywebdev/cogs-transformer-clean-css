const CleanCSS = require('clean-css');

module.exports = ({file: {buffer}, options}) => {
  const res = (new CleanCSS(options)).minify(buffer.toString());
  const errorMessage = res.errors.concat(res.warnings).join('\n');
  if (errorMessage) throw new Error(errorMessage);

  return {buffer: new Buffer(`${res.styles}\n`)};
};
