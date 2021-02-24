import PropTypes from 'prop-types'

const objectConfigShape = PropTypes.shape({
  fromValue: PropTypes.number.isRequired,
  toValue: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  // Easing
  delay: PropTypes.number.isRequired,
})

export default {
  objectConfigShape,
}
