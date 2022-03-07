import db from '/home/ryan/express/traintycoon/db/database.js'
import pgp from 'pg-promise';

class Model {
    constructor(table){
        this.table = table;
    }

    async select(columns, clause) {
        const table = this.table;
        console.log(pgp.as.format('SELECT $1:name FROM $2:name',[columns,table]));
        //pgp reserves "this" for the query formatting object
        return db.any('SELECT $1:name FROM $2:name',[columns,table]);
    }
}

export default Model;
