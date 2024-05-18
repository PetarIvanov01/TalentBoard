import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const EmployeeTable = pgTable("employee", {
  id: serial("id").primaryKey(),
  firstName: varchar("firstName", { length: 150 }).notNull(),
  lastName: varchar("lastName", { length: 150 }).notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
