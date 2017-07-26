import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({}) => {
  return (
    <div>
        <ul className="nav nav-tabs">
            <li><IndexLink to="/app/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/app/account/" activeClassName="active">Account</Link></li>
            <li><Link to="/app/logout/" activeClassName="active">Logout</Link></li>
        </ul>
    </div>
  );
};

export default Header;
