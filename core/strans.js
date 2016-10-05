import _ from 'lodash';
import {BusesDB} from './database.js';
import fetch from 'isomorphic-fetch';

class Strans {
    constructor(address){
        this.address = `http://${address}/api/v1/`;
    }
    fetchBuses( search = '', callback){
        fetch(`${this.address}bus/search/${search}`)
        .then(response => response.json())
        .then(json => {
            if( !json.error && json.data ){
                _.each(json.data, (doc) => {
                    BusesDB.put({
                        _id: doc.code,
                        name: doc.name
                    });
                });

                callback();
            }
        });
    }

    getBuses( search = '', callback ){

        const searchs = new RegExp(search, 'ig');

        BusesDB.allDocs({
            include_docs: true
        }).then((results) => {
            let data = _.map(results.rows || [], (doc) => doc = doc.doc );

            data = _.filter(data, (doc) =>
                ( searchs.test(doc.name) || searchs.test(doc._id) )
            );

            callback(data);
        });
    }

    getStops({ lat, lng }){

    }
}

export default new Strans('localhost:8000');
