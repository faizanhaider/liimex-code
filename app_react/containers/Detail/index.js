import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>My Account</h1>
        <div className="form-container">
            <form method="post">
                <div className="form-group">
                    <label for="firstName">First name</label>
                    <input type="text" id="firstName" className="form-control" value={this.props.user.firstName} required />
                </div>
                <div className="form-group">
                    <label for="lastName">Last name</label>
                    <input type="text" id="lastName" className="form-control" value={this.props.user.lastName} required />
                </div>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" className="form-control" value={this.props.user.username} required />
                </div>
            </form>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(Detail);
