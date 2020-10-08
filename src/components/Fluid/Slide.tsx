import React from 'react';
import {move, curve, serialize} from 'react-native-redash';
import Svg, {Path} from 'react-native-svg';

const Slide = () => {
  const path = [
    move(0, 0),
    curve({
      c1: {
        x: 1,
        y: 0,
      },
      c2: {
        x: 1,
        y: 1,
      },
      to: {
        x: 1,
        y: 0.5,
      },
    }),
    close(),
  ];
  const d = serialize(path);
  return (
    <Svg viewBox="0 0 1 1">
      <Path d={d} fill="cyan" />
    </Svg>
  );
};

export default Slide;
