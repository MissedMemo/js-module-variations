(function(_) {
  const text = "hello!"

  _.getText = () => text

  if ( typeof module !== 'undefined' ) {
    module.exports = _
  } else {
    window.xlib = _
  }
}({}))