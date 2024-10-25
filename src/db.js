import { knex } from "knex";
import ClientPgLite from "knex-pglite";

export const db = knex({
  client: ClientPgLite,
  dialect: "postgres",
  connection: { connectionString: "idb://my-database" },
});

// If this is the first time the DB is created, then we need to create the tables:
await db.schema.createTableIfNotExists("users", (table) => {
  table.increments("id");
  table.string("user_name");
});
