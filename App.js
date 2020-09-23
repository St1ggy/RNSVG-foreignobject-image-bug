/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {ForeignObject, Svg as Container} from 'react-native-svg';

import TEST from './copy.png';

const App: () => React$Node = () => (
  <SafeAreaView>
    <Container>
      <ForeignObject>
        <View style={styles.checkBG}>
          <Image source={TEST} />
        </View>
      </ForeignObject>
    </Container>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  checkBG: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
});

export default App;
