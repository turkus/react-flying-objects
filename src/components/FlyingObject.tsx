import React, {
  useEffect, useMemo,
} from 'react'
import { Animated } from 'react-native-web'

import { ObjectConfig } from 'types'

interface FlyingObjectProps {
  objectConfig: ObjectConfig,
  objectToFly: React.ReactNode,
  onAnimationEnd(): void,
}

const FlyingObject: React.FC<FlyingObjectProps> = ({
  objectConfig,
  objectToFly,
  onAnimationEnd,
}) => {
  const styles = useMemo(() => {
    const obj: {[k: string]: string} = {}
    Object.entries(objectConfig).forEach(([key, value]) => {
      obj[key] = new Animated.Value(value.fromValue)
    })
    return obj
  }, [objectConfig])

  const animation = useMemo(() => (
    Animated.parallel(
      Object.entries(styles).map(([key, value]) => (
        Animated.timing(
          value,
          objectConfig[key as keyof ObjectConfig],
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

export default FlyingObject
