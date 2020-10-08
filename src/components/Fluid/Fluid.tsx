import React from 'react';
// import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import Slide from './Slide';

// const {width} = Dimensions.get('window');
// const SIZE = width;
const slides = [
  {
    color: '#3984FF',
    picture: require('./assets/jordan1s.png'),
    aspectRatio: 439.75 / 470.5,
  },
  {
    color: '#39ffb4',
    picture: require('./assets/jordan1s.png'),
    aspectRatio: 400.5 / 429.5,
  },
  {
    color: '#ffb439',
    picture: require('./assets/jordan1s.png'),
    aspectRatio: 391.25 / 520,
  },
];

const Fluid = () => {
  return (
    <Animated.ScrollView>
      {slides.map((slide, index) => (
        <Slide slide={slide} key={index} index={index} />
      ))}
    </Animated.ScrollView>
  );
};

export default Fluid;
