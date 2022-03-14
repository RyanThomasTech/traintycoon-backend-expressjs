import db from '/home/ryan/express/traintycoon/db/database.js'
import pgp from 'pg-promise';

class Model {
    constructor(table){
        this.table = table;
    }

    async select(columns, clause) {
        const table = this.table;
        //pgp reserves "this" for the query formatting object
        return db.any('SELECT $1:name FROM $2:name',[columns,table]);
    }

    async insertReturnRow(data){
        const table = this.table;
        return db.one('INSERT INTO $1:name($2:name) VALUES ($2:csv) RETURNING *',[table,data]);
    }
}

export default Model;
