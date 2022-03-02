//since this doesn't run in the main app, dotenv needs to be separately imported here
import 'dotenv/config';
import db from '/home/ryan/express/traintycoon/db/database.js';
import {
  insertStations,
  dropStationsTable,
  createStationsTable,
} from './queries.js';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await db.any(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropStationsTable ]);
export const createTables = () => executeQueryArray([ createStationsTable ]);
export const insertIntoTables = () => executeQueryArray([ insertStations ]);