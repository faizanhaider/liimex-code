import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  TouchableHighlight,
  Text,
  ScrollView
} from 'react-native'

import RegisterView from './RegisterView';
import LoginView from './LoginView';

export default class HomeView extends React.Component {
  constructor(props){
    super(props);
  }

  _handleRegisterView = () => {
    this.props.navigator.push({
      title: 'Register',
      component: RegisterView,
      backButtonTitle: 'Back',
      passProps: {navigator: this.props.navigator }
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <LoginView navigator={this.props.navigator}/>
        <TouchableHighlight onPress={this._handleRegisterView}>
          <Text style={[styles.button, styles.blueButton]}>
            Register
          </Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    borderRadius: 4,
    padding: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff'
  },
  blueButton: {
    backgroundColor: '#34AADC'
  }
})