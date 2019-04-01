const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
  client: 'pg',
  seeds: {
    directory: './db/seeds',
  },
  migrations: {
    directory: './db/migrations',
  },
};

const dbConfig = {
  production: {
    connection: `${DB_URL}?ssl=true`,
  },
  development: {
    connection: {
      database: 'PocketGP',
    },
  },
  test: {
    connection: {
      database: 'PocketGP_test',
    },
  },
};

module.exports = { ...baseConfig, ...dbConfig[ENV] };