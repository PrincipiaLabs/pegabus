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

export default class HomeSidebar extends React.Component {

    constructor( props ){
        super(props);
        this.state = {
            search: '',
            results: [
                { number: 723, name: 'Rodoviária Circular' },
                { number: 327, name: 'Rodoviária Circular II'}
            ]
        };
    }

    render() {
    return (
        <div className={classNames('column is-one-quarter', styles.sidebar)}>
            <div className={ styles.sidebar__header}>
                <input value={this.state.search} placeholder="Procure um ônibus" className={ styles.sidebar__search_input }/>
            </div>
            <div className={ styles.sidebar__results }>
                <table>
                {this.state.results.map(
                    (props, i) =>
                        (<tr key={i}>
                            <td>{props.number}</td>
                            <td>{props.name}</td>
                        </tr>)
                )}
                </table>
            </div>
        </div>
    );
  }
}