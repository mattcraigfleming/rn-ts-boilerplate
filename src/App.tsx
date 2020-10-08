import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Fluid from './components/Fluid/Fluid';

const App = () => {
  return (
    <View>
      <Fluid />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});

export default App;
