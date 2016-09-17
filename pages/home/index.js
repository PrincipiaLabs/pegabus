/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import HomeSidebar from './HomeSidebar';
import classNames from 'classnames';
import styles from './styles.css';
import HomeMap from './HomeMap';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = 'Pegabus - Mapa de ônibus';
  }

  render() {
    return (
        <Layout className={styles.content}>
            <div className='columns'>
                <HomeSidebar/>
                <div className="column is-offset-3">
                    <h1>HOME</h1>
                    <hr/>
                    <HomeMap/>
                </div>
            </div>
        </Layout>
    );
  }

}

export default HomePage;
