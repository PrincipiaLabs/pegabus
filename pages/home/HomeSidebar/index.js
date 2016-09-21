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
import styles from './HomeSidebar.css';
import classNames from 'classnames';
import { Buses } from '../../../core/database.js';
import _ from 'lodash';
import fetch from 'isomorphic-fetch';

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

    updateResults(){
        const searchs = new RegExp(this.state.search, 'ig');

        Buses.allDocs({
            include_docs: true
        }).then((results) => {
            let data = _.map(results.rows || [], (doc) => doc = doc.doc );

            data = _.filter(data, (doc) =>
                ( searchs.test(doc.name) || searchs.test(doc._id) )
            );

            this.setState({
                results: data
            });
        });
    }

    fetchResults(value){
        if( !value ) return;

        fetch(`http://localhost:8000/api/v1/bus/search/${value}`)
        .then(response => response.json())
        .then(json => {
            if( !json.error ){
                _.each(json.data, (doc) => {
                    Buses.put({
                        _id: doc.code,
                        name: doc.name
                    });
                });
                this.updateResults();
            }
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
                {this.state.results.map(
                    (props, i) =>
                        (
                        <div className={ styles.sidebar__result_item } key={i}>
                            <div className='columns'>
                                <div className='column is-4'>
                                    <h1 className={styles.sidebar__result_title}>{props._id}</h1>
                                </div>
                                <div className='column is-8'>
                                    <p>{props.name}</p>
                                </div>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    );
  }
}