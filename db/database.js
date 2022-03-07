// according to docs, pgp api handles pooling on its own, so just interact w this object
import pgPromise from 'pg-promise';
import monitor from 'pg-monitor';

const initOptions = {};
const pgp = pgPromise(initOptions);
monitor.attach(initOptions);
const cn = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5432/traintycoon`;
const db = pgp(cn);

export default db;