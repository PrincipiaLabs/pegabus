import React, { PropTypes } from 'react';
import styles from './HomeSidebarItem.css';
import classNames from 'classnames';
import { BusesDB } from '../../../core/database.js';
import Strans from '../../../core/strans.js';
import { connect } from 'react-redux';
import _ from 'lodash';

class HomeSidebarItem extends React.Component {

    static defaultProps = {
        _id: '2523452',
        name: 'A@#$'
    };

    handleClick(){
        Strans.fetchBus(this.props._id, (bus) => {
            console.log(bus._id);
            this.props.selectBus(bus);
        });
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
const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectBus: (bus) => {
            dispatch({
                type: 'SELECT_BUS',
                data: bus
            });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeSidebarItem);
