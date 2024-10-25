import { knex } from "knex";
import ClientPgLite from "knex-pglite";

export const db = knex({
  client: ClientPgLite,
  dialect: "postgres",
  connection: { connectionString: "idb://my-database" },
});

// If this is the first time the DB is created, then we need to create the tables:
if (!(await db.schema.hasTable("users"))) {
  // Create a table
  await db.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("user_name");
  });
}
