var config = require('config.json');
import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} from 'react-native'
import DetailView from './DetailView';
const t = require('tcomb-form-native')

const Form = t.form.Form

const User = t.struct({
  username: t.String,
  password:  t.String
})

const options = {
  fields: {
    username: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
    password: {
      autoCapitalize: 'none',
      secureTextEntry: true,
      autoCorrect: false
    }
  }
}

export default class LoginView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: {
        username: '',
        password: ''
      }
    }
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        username: '',
        password: null
      }
    }
  }

  _onChange = (value) => {
    this.setState({
      value
    })
  }
  _handleAdd = () => {
    const value = this.refs.form.getValue();
    // If the form is valid...
    if (value) {
      const data = {
        username: value.username,
        password: value.password
      }
      // Serialize and post the data
      const json = JSON.stringify(data)
      fetch(`${config.apiUrl}/users/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json
      })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          alert(res.error)
        } else {
          AsyncStorage.setItem('jwt', res.token)
          return fetch(`${config.apiUrl}/users/current`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${res.token}`,
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
          });
        }
      }).then((response) => response.json())
      .then((response) => {
        if(response) {
          this.props.navigator.push({
            title: 'Account',
            component: DetailView,
            passProps: { user: response, navigator: this.props.navigator }
          });
        } else {
          alert('User data is not retrieved.');
          this.props.navigator.pop();
        }
      })
      .catch(() => {
        alert('There was an error logging in.');
      })
      .done()
    } else {
      // Form validation error
      alert('Please fix the errors listed and try again.')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref='form'
          options={options}
          type={User}
          value={this.state.value}
          onChange={this._onChange}
        />
        <TouchableHighlight onPress={this._handleAdd}>
          <Text style={[styles.button, styles.greenButton]}>Log In</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
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
  greenButton: {
    backgroundColor: '#4CD964'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})