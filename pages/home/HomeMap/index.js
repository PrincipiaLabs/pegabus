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
import styles from './HomeMap.css';
import classNames from 'classnames';
import GoogleMap from 'google-map-react';

export default class HomeSidebar extends React.Component {

    static defaultProps = {
        options: {
            key: 'AIzaSyB_Im8QJE25qpMS-ab8SmapTuPq8tRJF2I',
            language: 'pt-br'
        }
    }

    constructor(props){
        super(props);
        this.state = {
            center: {lat: 59.938043, lng: 30.337157},
            zoom: 9,
        };
    }

    render() {
    return (
        <div className={styles.map_container}>
            <GoogleMap
                bootstrapURLKeys={this.props.options}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
            >
            </GoogleMap>
        </div>
    );
  }
}

