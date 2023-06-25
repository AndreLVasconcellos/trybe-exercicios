// const config = {
//   username: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   host: process.env.MYSQL_HOST,
//   dialect: 'mysql',
// };

// module.exports = {
//   development: config,
//   test: config,
//   production: config,
// };

module.exports = {
  development: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    database: `${process.env.DATABASE_NAME || 'relacao_one_one'}_dev`,
    host: process.env.DATABASE_HOSTNAME || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    database: `${process.env.DATABASE_NAME || 'relacao_one_one'}_test`,
    host: process.env.DATABASE_HOSTNAME || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_NAME || 'relacao_one_one',
    host: process.env.DATABASE_HOSTNAME || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql',
  },
};