import _ from 'lodash';
import {BusesDB, StopsDB} from './database.js';
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

    fetchBus( busId, callback){
        fetch(`${this.address}bus/id/${busId}`)
        .then(response => response.json())
        .then(json => {
            if( !json.error && json.data ){
                const doc = json.data;
                const data = {
                    _id: doc.code,
                    name: doc.name,
                    start: doc.start,
                    'final': doc.final,
                    stops: doc.stops,
                    _rev: '2-a'
                };
                //BusesDB.put(data);
                callback(data);
            }
        });
    }

    getBus( busId, callback ){
        BusesDB.get(busId).then(callback);
    }

    fetchStops({ lat, lng }, callback){
        fetch(`${this.address}stops/search/${lat}/${lng}`)
        .then(response => response.json())
        .then(json => {
            if( !json.error && json.data ){
                var docs = [];

                _.each(json.data, function(doc){
                    let temp = {
                        _id: doc.code,
                        name: doc.name,
                        lat: doc.lat,
                        lng: doc.lng
                    };
                    //StopsDB.put(temp);
                    docs.push(temp);
                });
                callback(docs);
            }
        });
    }

    getStops({lat, lng}, callback){
        StopsDB.get()
    }
}

window.tst= new Strans('localhost:8000');

export default new Strans('localhost:8000');
