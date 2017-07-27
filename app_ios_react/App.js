import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  NavigatorIOS 
} from 'react-native';

import HomeView from './views/HomeView';

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
        title: 'User Registration and Login Example Application',
        component: HomeView,
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});