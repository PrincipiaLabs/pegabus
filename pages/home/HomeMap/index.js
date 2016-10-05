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
import { StopsDB } from '../../../core/database.js';

export default class HomeMap extends React.Component {

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
        ,zoom: 15,
    }

    constructor(props){
        super(props);

        this.state = {
            center: props.location,
            zoom: 15,
            stops: props.markers
        };
    }

    changeLocation(lat, lng){
        this.setState({
            center: { lat: lat, lng: lng }
        });
    }

    handleChange({ center }){
        console.log(center);
    }

    componentWillMount(){
       /* if( window.navigator.geolocation ){
            navigator.geolocation.getCurrentPosition( (position) => {
                if( position.coords )
                    this.changeLocation(
                        position.coords.latitude,
                        position.coords.longitude
                    );
            });
        }*/
    }


    render() {
    return (
        <div className={styles.map_container}>
            <GoogleMap
                bootstrapURLKeys={this.props.options}
                defaultCenter={this.props.location}
                defaultZoom={this.props.zoom}
                zoom={this.props.zoom}
                onChange={this.handleChange.bind(this)}
            >
            {this.state.stops}
            </GoogleMap>
        </div>
    );
  }
}

