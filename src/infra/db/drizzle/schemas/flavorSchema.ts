import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const flavor = sqliteTable("flavors", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  color: text("color").notNull()
});
