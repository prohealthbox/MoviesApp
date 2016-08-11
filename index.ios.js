/**
 * @flow
 */
'use strict';

let React = require('react');
const ReactNative = require('react-native');
let {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = ReactNative;

const SearchScreen = require('./SearchScreen');

class MoviesApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Movies',
          component: SearchScreen,
        }}
      />
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('MoviesApp', () => MoviesApp);
