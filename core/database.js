import PouchDB from 'pouchdb';

export const Buses = new PouchDB('pegabus.bus');
export const Stops = new PouchDB('pegabus.stops');
