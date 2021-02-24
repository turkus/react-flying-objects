import React, {
  useEffect, useMemo,
} from 'react'
import { Animated } from 'react-native-web'
import PropTypes from 'prop-types'

import { ObjectConfig } from 'types'
import proptypes from 'proptypes'

interface FlyingObjectProps {
  objectConfig: ObjectConfig,
  objectToFly: React.ReactNode,
  onAnimationEnd(): void,
}

const FlyingObject: React.SFC<FlyingObjectProps> = ({
  objectConfig,
  objectToFly,
  onAnimationEnd,
}) => {
  const styles = useMemo(() => (
    Object.entries(objectConfig).reduce((obj, [key, value]) => {
      obj[key] = new Animated.Value(value.fromValue)
      return obj
    }, {})
  ), [objectConfig])

  const animation = useMemo(() => (
    Animated.parallel(
      Object.entries(styles).map(([key, value]) => (
        Animated.timing(
          value,
          objectConfig[key],
        )
      )),
    )
  ), [objectConfig, styles])

  useEffect(() => {
    animation.start(onAnimationEnd)
  }, [animation, onAnimationEnd])

  return (
    <Animated.View
      style={{
        position: 'absolute',
        ...styles,
      }}
    >
      {objectToFly}
    </Animated.View>
  )
}

FlyingObject.propTypes = {
  objectConfig: proptypes.objectConfigShape.isRequired,
  objectToFly: PropTypes.element.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
}

export default FlyingObject
