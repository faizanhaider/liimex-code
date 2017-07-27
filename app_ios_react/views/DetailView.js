import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
  Text
} from 'react-native'
import HomeView from './HomeView';
export default class DetailView extends React.Component {

  constructor(props) {
    super(props);
  }

  _logout = () => {
    AsyncStorage.removeItem('jwt');
    this.props.navigator.pop();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Hi {this.props.user.firstName}!!</Text>
        <Image source={{
          uri: `${this.props.user.img}`
        }}
        style={{width: 150, height: 150, marginBottom: 5}} />
        <TouchableHighlight onPress={this._logout}>
          <Text style={[styles.button, styles.blackButton]}>Log Out</Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 4,
    padding: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff'
  },
  blackButton: {
    backgroundColor: '#000'
  }
})