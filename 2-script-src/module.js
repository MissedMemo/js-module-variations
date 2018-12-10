const text = "hello!"

const getText = () => text

if ( typeof module !== 'undefined' ) {
  module.exports = { getText }
}