const seq = require('../db/mysql')
const { TEXT, INTEGER, STRING } = require('sequelize');

const Live = seq.define('live', {
  img: {
    type: STRING,
    allowNull: false
  },

  href: {
    type: TEXT,
    allowNull: false
  },

  count: {
    type: STRING,
    allowNull: false
  },

  title: {
    type: STRING,
    allowNull: false
  },

  up_img: {
    type: STRING,
    allowNull: false
  },

  up_name: {
    type: STRING,
    allowNull: false
  },

  tags: {
    type: STRING,
    allowNull: false,
    set (val) {
      return this.setDataValue('tags', JSON.stringify(val));
    }
  },

  status: {
    type: INTEGER,
    defaultValue: 1
  }
}, {
  underscored: true
})

module.exports = Live;
