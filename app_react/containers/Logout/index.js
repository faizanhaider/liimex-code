import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../actions';

class Logout extends Component {
  
  constructor(props) {
    super(props);
    props.actions.logout();
  }

  render() {
    return (
      <div className="container">
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      logout,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
