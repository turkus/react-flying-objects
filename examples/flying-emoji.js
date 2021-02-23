const DELAY = 1000
const DURATION = 5000
const SIZE = 25

const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

const objectConfig = {
  right: {
    fromValue: 0,
    toValue: 800,
    duration: DURATION,
    delay: DELAY,
  },
  top: {
    fromValue: random(100, 200),
    toValue: random(100, 200),
    duration: DURATION,
    easing: Easing.elastic(5),
    delay: DELAY,
  },
  width: {
    fromValue: random(SIZE - 10, SIZE + 10),
    toValue: SIZE,
    duration: DURATION,
    easing: Easing.elastic(5),
    delay: DELAY,
  },
  height: {
    fromValue: random(SIZE - 10, SIZE + 10),
    toValue: SIZE,
    duration: DURATION,
    easing: Easing.elastic(5),
    delay: DELAY,
  },
  opacity: {
    fromValue: 1,
    toValue: 0,
    duration: DURATION,
    easing: Easing.exp,
    delay: DELAY,
  } 
}
