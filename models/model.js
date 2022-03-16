import db from '/home/ryan/express/traintycoon/db/database.js'

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

    async deleteReturnRow(data){
        const table = this.table;
        return db.one('DELETE FROM $1:name WHERE ($2:name)=($2:csv) RETURNING *',[table,data]);
    }

    async updateReturnRow(data){
        const table = this.table;
        //combining table and data into an obj to use pgp's nested named parameters
        const obj = { data, table };
        return db.one('UPDATE $/table:name/ SET name = ($/data.name/) WHERE id=$/data.id/ RETURNING *',obj);
    }
}

export default Model;
