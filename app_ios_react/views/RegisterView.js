import apiUrl from '../config.js';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native'

const t = require('tcomb-form-native');

const Form = t.form.Form

const newUser = t.struct({
  firstName: t.String,
  lastName: t.String,
  username: t.String,
  password:  t.String
})

const options = {
  fields: {
    firstName: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
    lastName: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
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

export default class RegisterView extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      value: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      }
    }
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        firstName: '',
        lastName: '',
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
        firstName: value.firstName,
        lastName: value.lastName,
        username: value.username,
        password: value.password,
      }
      // Serialize and post the data
      const json = JSON.stringify(data);
      fetch(`${apiUrl}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json
      })
      .then((response) => {
       // Redirect to home screen
        this.props.navigator.pop();
      })
      .catch((error) => {
        alert('There was an error creating your account.');
      })
      .done()
    } else {
      // Form validation error
      alert('Please fix the errors listed and try again.')
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Form
          ref='form'
          type={newUser}
          options={options}
          value={this.state.value}
          onChange={this._onChange}
        />
        <TouchableHighlight onPress={this._handleAdd}>
          <Text style={[styles.button, styles.greenButton]}>Create account</Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
  greenButton: {
    backgroundColor: '#4CD964'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})