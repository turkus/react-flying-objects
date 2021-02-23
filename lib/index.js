import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import PropTypes from 'prop-types';

const count = function* count(start = 0, step = 1) {
  while (true) {
    start += step;
    yield start;
  }
};

const FlyingObject = ({
  objectConfig,
  object,
  onAnimationEnd
}) => {
  const styles = useMemo(() => Object.entries(objectConfig).reduce((obj, [key, value]) => {
    obj[key] = new Animated.Value(value.fromValue);
    return obj;
  }, {}), [objectConfig]);
  const animation = useMemo(() => Animated.parallel(Object.entries(styles).map(([key, value]) => Animated.timing(value, objectConfig[key]))), [objectConfig, styles]);
  useEffect(() => {
    animation.start(onAnimationEnd);
  }, [animation, onAnimationEnd]);
  return /*#__PURE__*/React.createElement(Animated.View, {
    style: {
      position: 'absolute',
      ...styles
    }
  }, object);
};

FlyingObject.propTypes = {
  objectConfig: PropTypes.object.isRequired,
  object: PropTypes.object.isRequired,
  onAnimationEnd: PropTypes.func.isRequired
};

const Fly = ({
  flyingObjects,
  objectConfig,
  objectToFly,
  setFlyingObjects
}) => {
  const counter = useRef(count()).current;
  const objectKeys = useRef(new Set()).current;
  useEffect(() => {
    if (!objectToFly) return;
    const key = counter.next().value;
    objectKeys.add(key);
    const flyingObject = /*#__PURE__*/React.createElement(FlyingObject, {
      key: key,
      object: objectToFly,
      onAnimationEnd: () => objectKeys.delete(key),
      objectConfig: objectConfig
    });
    setFlyingObjects(prev => [...prev, flyingObject].filter(object => objectKeys.has(parseInt(object.key))));
  }, [counter, objectConfig, objectKeys, objectToFly, setFlyingObjects]);
  return /*#__PURE__*/React.createElement(View, {
    style: {
      position: 'relative'
    }
  }, flyingObjects);
};

Fly.propTypes = {
  flyingObjects: PropTypes.array.isRequired,
  objectConfig: PropTypes.object.isRequired,
  objectToFly: PropTypes.node.isRequired,
  setFlyingObjects: PropTypes.func.isRequired
};
export default Fly;
