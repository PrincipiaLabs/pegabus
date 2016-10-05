import React, { PropTypes } from 'react';
import HomeSidebarItem from '../HomeSidebarItem';
import styles from './HomeSidebar.css';
import classNames from 'classnames';
import _ from 'lodash';
import Strans from '../../../core/strans.js';

export default class HomeSidebar extends React.Component {

    constructor( props ){
        super(props);
        this.state = {
            search: props.search,
            results: [
                { number: 723, name: 'Rodoviária Circular' },
                { number: 327, name: 'Rodoviária Circular II'  }
            ]
        };
    }

    updateResults(value){
        Strans.getBuses(value, (data) => {
            this.setState({
                results: data
            });
        });
    }

    fetchResults(value){
        if( !value ) return;

        Strans.fetchBuses(value, () => {
            this.updateResults(value);
        });
    }

    handleSearch(event){
        const value = event.currentTarget.value;

        this.setState({
            search: value
        });

        this.updateResults();
        this.fetchResults(value);
    }
    componentDidMount(){
        this.updateResults();
    }

    render() {
    return (
        <div className={classNames('column is-one-quarter', styles.sidebar)}>
            <div className={ styles.sidebar__header}>
                <input
                    value={this.state.search}
                    onChange={this.handleSearch.bind(this)}
                    placeholder="Procure um ônibus"
                    className={ styles.sidebar__search_input }
                />
            </div>
            <div className={ styles.sidebar__results }>
                {
                    this.state.results.map(
                        (props, i) => <HomeSidebarItem {...props} key={i}/>
                    )
                }
            </div>
        </div>
    );
  }
}