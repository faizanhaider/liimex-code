/**
 * Main Component. Holds the Application layout
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Common/Header';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  _logout() {
    if(!this.props.isLoggedIn) {
      window.location.assign('/login');
    }
  }
  render() {
    return (
      <div>
        {this._logout()}
        <Header />
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
// Which props do we want to inject, given the global state?
const mapStateToProps = (state) => {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
};

export default connect(mapStateToProps)(Main);
