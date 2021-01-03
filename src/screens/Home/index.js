import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const HomeScreen = () => {
  const [] = useState();

  return (
    <View style={styles.home}>
      <Text style={styles.home__line}>My room</Text>

      <Text style={styles.home__line}>My room</Text>

      <Text style={styles.home__line}>My room</Text>

      <Text style={styles.home__line}>My room</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'pink',
  },

  home__line: {
    padding: 10,
    backgroundColor: '#b0c7c2',
    borderWidth: 2,
    borderColor: '#fff',
  },
});
