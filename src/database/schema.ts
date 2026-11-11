import {
  AnyPgColumn,
  bigserial,
  bigint,
  pgTable,
  text,
  boolean,
  timestamp,
  smallint,
  time
} from 'drizzle-orm/pg-core'

export const todo = pgTable('todo', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  title: text('title').notNull(),
  completed: boolean().notNull().default(false),
  fatherId: bigint('father_id', { mode: 'number' }).references((): AnyPgColumn => todo.id),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }).notNull().defaultNow(),
})

export const editions = pgTable("editions", {
  id: bigint("id", { mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity(),
  name: text("name").notNull(),
  number: text("number").notNull(),
  orgId: bigint("org_id", { mode: "number" })
    .notNull()
    .default(0),
    // ---- aguardando implementação das organizations ----
    // .references(() => organizations.id, {
    //   onDelete: "set default",
    // }),

  startDate: timestamp("start_date", { withTimezone: true })
    .notNull()
    .defaultNow(),
  endDate: timestamp("end_date", { withTimezone: true }).notNull(),
  amount: smallint("amount").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }),
});

export const activities = pgTable('activities', {
  id: bigint('id', { mode: 'number' })
    .primaryKey()
    .generatedByDefaultAsIdentity(),

  editionId: bigint('edition_id', { mode: 'number' })
    .references(() => editions.id),

  desc: text('desc').notNull(),

  place: text('place'),

  sold: smallint('sold')
    .notNull()
    .default(0),

  donation: smallint('donation')
    .notNull()
    .default(0),

  createdAt: timestamp('created_at', {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),

  updatedAt: timestamp('updated_at', {
    withTimezone: true,
  }),

  startDate: timestamp('start_date', {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),

  endDate: timestamp('end_date', {
    withTimezone: true,
  }),
})

// -- WARNING: This schema is for context only and is not meant to be run.
// -- Table order and constraints may not be valid for execution.

// CREATE TABLE public.todo (
//   id bigint NOT NULL DEFAULT nextval('todo_id_seq'::regclass),
//   title text NOT NULL,
//   father_id bigint,
//   CONSTRAINT todo_pkey PRIMARY KEY (id),
//   CONSTRAINT fk_todo_father FOREIGN KEY (father_id) REFERENCES public.todo(id)
// );


// CREATE TABLE public.recepie (
//   id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
//   title text,
//   description text,
//   tags ARRAY,
//   created_at timestamp with time zone NOT NULL DEFAULT now(),
//   updated_at timestamp with time zone,
//   CONSTRAINT recepie_pkey PRIMARY KEY (id)
// );