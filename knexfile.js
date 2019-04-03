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
      database: 'pocketgp',
      username: 'rosiline',
      password: 'password'
    },
  },
  test: {
    connection: {
      database: 'pocketgp_test',
      username: 'rosiline',
      password: 'password'
    },
  },
};

module.exports = { ...baseConfig, ...dbConfig[ENV] };