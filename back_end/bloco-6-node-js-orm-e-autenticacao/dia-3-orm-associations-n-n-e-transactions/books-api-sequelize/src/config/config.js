module.exports = {
  development: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: 'books_database_development',
    host: process.env.DATABASE_HOSTNAME || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: 'books_database_test',
    host: process.env.DATABASE_HOSTNAME || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: 'books_database_production',
    host: process.env.DATABASE_HOSTNAME || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql',
  },
};