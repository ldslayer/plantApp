import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Navigation from './navigation'
import { Block } from './components'

const imafes = [
  require('./assets/icons/back.png'),
  require('./assets/icons/plants.png'),
  require('./assets/icons/seeds.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/avatar.png'),
]

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  }
  handleResourceAsync = async () => {
    // we're caching all the images 
    // for better performance on the app
    const cacheImages = images.map(img => Asset.fromModule(img).downloadAsync())
    return Promise.all(cacheImages)
  }
  componentDidMount() {
    SplashScreen.hide()
  }
  
  render() {
    if (this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <View
          startAsync={this.handleResourceAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        >
        </View>
      )
    }
    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({

});
