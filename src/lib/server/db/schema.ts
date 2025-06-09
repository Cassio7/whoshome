import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const person = sqliteTable('person', {
	id: integer('id').primaryKey(),
	nome: text('nome').notNull(),
	cognome: text('cognome').notNull(),
	dispositivo: text('dispositivo').notNull(),
	active: integer('active', { mode: 'boolean' }).notNull().default(false)
});
