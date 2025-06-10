import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const person = sqliteTable('person', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	surname: text('surname').notNull(),
	username: text('username').notNull(),
	device: text('device').notNull(),
	active: integer('active', { mode: 'boolean' }).notNull().default(false)
});
