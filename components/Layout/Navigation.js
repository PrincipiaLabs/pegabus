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
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
       <div className="nav-right nav-menu">
          <Link className="nav-item" to="/">Mapa</Link>
          <Link className="nav-item" to="/about">Sobre nós</Link>

          <span className="nav-item">
            <Link className="button" to="/">
              <span>Ajude-nos</span>
            </Link>
          </span>
      </div>
    );
  }

}

export default Navigation;
