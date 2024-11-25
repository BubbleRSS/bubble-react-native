import type { Config } from 'drizzle-kit';

export default {
	schema: './src/infra/db/drizzle/schemas/*',
	out: './drizzle',
  dialect: 'sqlite',
	driver: 'expo',
} satisfies Config;
