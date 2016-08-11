/**
 * @flow
 */
'use strict';

let React = require('react');
const ReactNative = require('react-native');
let {
  AppRegistry,
  BackAndroid,
  Navigator,
  StyleSheet,
  ToolbarAndroid,
  View,
} = ReactNative;

let MovieScreen = require('./MovieScreen');
let SearchScreen = require('./SearchScreen');

let _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

let RouteMapper = function (route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;
  if (route.name === 'search') {
    return (
      <SearchScreen navigator={navigationOperations} />
    );
  } else if (route.name === 'movie') {
    return (
      <View style={{ flex: 1 }}>
        <ToolbarAndroid
          actions={[]}
          navIcon={require('./assets/images/android_back_white.png')}
          onIconClicked={navigationOperations.pop}
          style={styles.toolbar}
          titleColor="white"
          title={route.movie.title}
        />
        <MovieScreen
          style={{ flex: 1 }}
          navigator={navigationOperations}
          movie={route.movie}
        />
      </View>
    );
  }
};

class MoviesApp extends React.Component {
  render() {
    let initialRoute = { name: 'search' };
    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={RouteMapper}
      />
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: '#a9a9a9',
    height: 56,
  },
});

AppRegistry.registerComponent('MoviesApp', () => MoviesApp);
