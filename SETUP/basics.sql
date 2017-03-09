-- Postgres

BEGIN;

CREATE TABLE "public"."rules" (
	id SERIAL PRIMARY KEY NOT NULL,
	name TEXT
);

CREATE TABLE "public"."tables" (
	id SERIAL PRIMARY KEY NOT NULL,
	name TEXT NOT NULL,
	log DOUBLE PRECISION,
	lat DOUBLE PRECISION
);

CREATE TABLE "public"."player" (
	id SERIAL PRIMARY KEY NOT NULL,
	name TEXT NOT NULL,
	joined TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE "public"."games" (
	id SERIAL PRIMARY KEY NOT NULL,
	rule_id INT NOT NULL REFERENCES "public"."rules" (id),
	start TIMESTAMP WITH TIME ZONE,
	finished TIMESTAMP WITH TIME ZONE,
	table_id INT REFERENCES "public"."tables" (id)
);

CREATE TABLE "public"."lineup" (
	id SERIAL PRIMARY KEY NOT NULL,
	violet_attack INT REFERENCES "public"."player" (id),
	violet_defense INT REFERENCES "public"."player" (id),
	yellow_attack INT REFERENCES "public"."player" (id),
	yellow_defense INT REFERENCES "public"."player" (id)
);

CREATE TABLE "public"."goals" (
	id SERIAL PRIMARY KEY NOT NULL,
	game INT NOT NULL REFERENCES "public"."games" (id),
	lineup INT NOT NULL REFERENCES "public"."lineup" (id),
	goaled_violet BOOLEAN NOT NULL DEFAULT FALSE,
	goaled_yellow BOOLEAN NOT NULL DEFAULT FALSE
);

END;