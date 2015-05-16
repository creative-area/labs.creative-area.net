// to use it:
// $( document ).ready(function() {
//   $( 'body' ).prepend( window.creativeAreaRibbons.github( 'creativearea/repo-name' ) ).append( window.creativeAreaRibbons.buildAtCreativeArea() );
// } );

;(window.creativeAreaRibbons = {
  ribbon: function( position, ribbonClass, url, label ) {
    return [
      '<div class="github-fork-ribbon-wrapper ' + position + '">',
        '<div class="github-fork-ribbon ' + ribbonClass + '">',
          '<a href="' + url + '" target="_blank">' + label + '</a>',
        '</div>',
      '</div>'
    ].join( '' );
  },
  github: function( repo ) {
    return window.creativeAreaRibbons.ribbon( 'right', '', 'https://github.com/' + repo, 'Fork me on GitHub' );
  },
  buildAtCreativeArea: function() {
    return window.creativeAreaRibbons.ribbon( 'left-bottom', 'creative-area', 'http://www.creative-area.net/', 'Built @ Creative Area' );
  }
});
