/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import classNames from 'classnames';
import styles from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className={classNames('nav', styles.header)}>
          <div className="nav-left">
              <Link className="nav-item is-brand" to="to">
                <img src="/imgs/logo.png" alt="Pegabus logo"/>
              </Link>
            </div>

            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <Navigation />
        </nav>
      </header>
    );
  }

}

export default Header;
