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
import Stops from '../Stops';

export default class HomeSidebar extends React.Component {

    static defaultProps = {
        options: {
            key: 'AIzaSyB_Im8QJE25qpMS-ab8SmapTuPq8tRJF2I',
            language: 'pt-br'
        },
        location: {
            lat: -5.0855827,
            lng: -42.8034291
        },
        markers: [
            <Stops lat={-5.0855827} lng={-42.8034291} text={'A'}/>,
            <Stops lat={-5.0859867} lng={-42.8024221} text={'B'}/>
        ]
    }

    constructor(props){
        super(props);

        this.state = {
            center: props.location,
            zoom: 15,
        };
    }
    
    changeLocation(lat, lng){
        this.setState({
            center: { lat: lat, lng: lng }
        });
    }

    componentWillMount(){
        if( window.navigator.geolocation ){
            navigator.geolocation.getCurrentPosition( (position) => {
                if( position.coords )
                    this.changeLocation(
                        position.coords.latitude,
                        position.coords.longitude
                    );
            });
        }
    }


    render() {
    return (
        <div className={styles.map_container}>
            <GoogleMap
                bootstrapURLKeys={this.props.options}
                defaultCenter={this.props.location}
                center={this.state.center}
                defaultZoom={this.state.zoom}
            >
            {this.props.markers}
            </GoogleMap>
        </div>
    );
  }
}

