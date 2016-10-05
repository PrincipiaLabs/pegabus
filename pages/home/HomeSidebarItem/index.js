import React, { PropTypes } from 'react';
import styles from './HomeSidebarItem.css';
import classNames from 'classnames';
import { BusesDB } from '../../../core/database.js';
import _ from 'lodash';
//import fetch from 'isomorphic-fetch';

export default class HomeSidebarItem extends React.Component {

    static defaultProps = {
        _id: '2523452',
        name: 'A@#$'
    };

    handleClick(){
        console.log(this, 'hufahduadfhaudf');
    }

    render(){
        const props = this.props;
        return (
            <div onClick={this.handleClick.bind(this)} className={ styles.sidebar__result_item }>
                <div className='columns'>
                    <div className='column is-4'>
                        <h1 className={styles.sidebar__result_title}>{props._id}</h1>
                    </div>
                    <div className='column is-8'>
                        <p>{props.name}</p>
                    </div>
                </div>
            </div>
        );
    }
}
