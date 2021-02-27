import React, {
  useEffect, useRef,
} from 'react'
import { View } from 'react-native-web'

import { ObjectConfig } from 'types'
import FlyingObject from './FlyingObject'

interface FlyProps {
  flyingObjects: React.ReactNode[],
  objectConfig: ObjectConfig,
  objectToFly: React.ReactNode,
  setFlyingObjects(prev: React.ReactNode[]): React.ReactNode[],
}

const Fly: React.FC<FlyProps> = ({
  flyingObjects,
  objectConfig,
  objectToFly,
  setFlyingObjects,
}) => {
  const counter = useRef(0)
  const objectKeys = useRef(new Set()).current

  useEffect(() => {
    if (!objectToFly) return

    counter.current += 1
    const key = counter.current
    objectKeys.add(key)

    const flyingObject = (
      <FlyingObject
        key={key}
        objectToFly={objectToFly}
        onAnimationEnd={() => objectKeys.delete(key)}
        objectConfig={objectConfig}
      />
    )
    setFlyingObjects((prev) => [...prev, flyingObject]
      .filter((object) => objectKeys.has(parseInt(object.key, 10))))
  }, [
    counter,
    objectConfig,
    objectKeys,
    objectToFly,
    setFlyingObjects,
  ])

  return (
    <View style={{ position: 'relative' }}>
      { flyingObjects }
    </View>
  )
}

export default Fly
