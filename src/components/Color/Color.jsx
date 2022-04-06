import PropTypes from 'prop-types'
import ColorContainer from './styles'

const Color = ({ color, ...props }) => {
  return <ColorContainer color={color} className="colorBox" />
}

Color.propTypes = {
  color: PropTypes.string
}

export default Color
