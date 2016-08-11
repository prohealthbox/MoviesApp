/**
 * @flow
 */
'use strict';

function getImageSource(movie: Object, kind: ?string): {uri: ?string} {
  var uri = movie && movie.posters ? movie.posters.thumbnaa : null;
  if (uri && kind) {
    uri = uri.replace('tmb', kind);
  }

  return { uri };
}

module.exports = getImageSource;
