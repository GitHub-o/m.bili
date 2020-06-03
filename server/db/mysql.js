const Seq = require('sequelize')
const { MYSQL_CONF } = require('../config/db')

const { base, conf } = MYSQL_CONF;

const seq = new Seq(...conf, base);

seq
  .sync()
  .then(() => console.log('MYSQL connect: OK'))
  .catch((err) => console.log(`MYSQL connect error: ${ err }`));

module.exports = seq;
