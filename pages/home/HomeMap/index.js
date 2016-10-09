import React, { PropTypes } from 'react';
import { connect  } from 'react-redux';
import classNames from 'classnames';
import GoogleMap from 'google-map-react';

import styles from './HomeMap.css';
import Stops from '../Stops';
import { StopsDB } from '../../../core/database.js';

class HomeMap extends React.Component {

    static defaultProps = {
        options: {
            key: 'AIzaSyB_Im8QJE25qpMS-ab8SmapTuPq8tRJF2I',
            language: 'pt-br'
        },
        location: {
            lat: -5.0855827,
            lng: -42.8034291
        },
        stops: [
            { lat: -5.0855827, lng: -42.8034291, name:'A'},
            { lat: -5.0859867, lng: -42.8024221, name:'B'}
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


    render(){
        return (
            <div className={styles.map_container}>
                <GoogleMap
                    bootstrapURLKeys={this.props.options}
                    defaultCenter={this.props.location}
                    defaultZoom={this.props.zoom}
                    zoom={this.props.zoom}
                    onChange={this.handleChange.bind(this)}
                >
                {
                    this.props.stops.map((marker, i) =>
                        <Stops {...marker} key={i}/>
                    )
                }
                </GoogleMap>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { stops: state.toJS().stops };
};

const mapDispatchToProps = (dispatch) => {
    return { selectStop: (id) => { dispatch({}) } };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeMap);

