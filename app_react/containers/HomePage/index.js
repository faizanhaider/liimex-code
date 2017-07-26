import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hi {this.props.user.firstName}!!</h1>
        <img className="profile-pic" src={this.props.user.img} />
      </div>
    );
  }
}

HomePage.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(HomePage);
