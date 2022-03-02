// according to docs, pgp api handles pooling on its own, so just interact w this object
import pgPromise from 'pg-promise';
const pgp = pgPromise({});
const cn = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5432/traintycoon`;
const db = pgp(cn);

export default db;