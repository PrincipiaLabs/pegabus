import PouchDB from 'pouchdb';

export const BusesDB = new PouchDB('pegabus.bus');
export const StopsDB = new PouchDB('pegabus.stops');
