"use strict";

function renderEm (tokens, idx, opts, _, slf) {
  var token = tokens[idx];
  if (token.markup === '_') {
    token.tag = 'span';
    if (token.nesting === 1) {
      token.attrs = [ [ 'class', 'md-it-underline' ] ];
    }
  }
  return slf.renderToken(tokens, idx, opts);
}

module.exports = function plugin(md, options) {
  md.renderer.rules.em_open = renderEm;
  md.renderer.rules.em_close = renderEm;
};