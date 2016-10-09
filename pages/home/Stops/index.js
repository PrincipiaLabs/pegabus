import React, { PropTypes } from 'react';
import styles from './Stops.css';
import classNames from 'classnames';

export default class Stops extends React.Component {

    render() {
        if( this.props.$hover )
            console.log("HOVVEEEEERRR!");

        return (
            <div className={styles.stop}>{this.props.name}</div>
        );
    }
}
