const FullRank = require('../models/FullRank');
const OriginRank = require('../models/OriginRank');
const BangumiRank = require('../models/BangumiRank');
const CinemaRank = require('../models/CinemaRank');
const RookieRank = require('../models/RookieRank');
const Carousel = require('../models/Carousel');
const Promote = require('../models/Promote');
const Live = require('../models/Live');
const ESports = require('../models/ESports');
const { INDEX, COMMON } = require('../libs/codeInfo');
const utils = require('../libs/utils');
const { CRAWL_URL } = require('../config');

const { FULL } = CRAWL_URL;

class Index {
  async getHomeData (ctx) {
    const query = {
      where: {
        status: 1
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'status']
      },
      order: [['updatedAt', 'DESC']]
    };

    const promises = [];
    const { prototype } = Index;
    const list = [
      'getCarouselData',
      'getPromoteData',
      'getLiveData',
      'getESportsData'
    ];

    for (let item of list) {
      const func = prototype[item](query);

      promises.push(func);
    }

    const [carousel, promote, live, e_sports] = await Promise.all(promises);

    ctx.body = {
      ...INDEX.SUCCESS_GET_HOME_DATA,
      data: {
        carousel,
        promote,
        live,
        e_sports
      }
    };
  }

  async getFeatureData (ctx) {
    const { field, num, page } = ctx.request.body;

    if (!field) {
      ctx.body = INDEX.EMPTY_FIELD;
      return;
    }

    if (!num) {
      ctx.body = INDEX.EMPTY_NUM;
      return;
    }

    if (typeof num !== 'number') {
      ctx.body = INDEX.INVALID_NUM;
      return;
    }

    if (typeof page !== 'number') {
      ctx.body = INDEX.INVALID_PAGE;
      return;
    }

    if (!FULL[field]) {
      ctx.body = INDEX.INVALID_FIELD;
      return;
    }

    const offset = num * page;

    const query = {
      offset,
      limit: num,
      where: {
        status: 1
      },
      order: [
        ['score', 'DESC'],
        ['updatedAt', 'DESC']
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'id', 'status']
      }
    }

    const [err, data] = await utils.asyncFunc(
      () => Index.prototype.getFullData(query)
    )

    if (err) {
      ctx.body = { ...COMMON.ERROR, msg: err.message };
      return;
    }

    ctx.body = { ...INDEX.SUCCESS_GET_FEATURE_DATA, data };
  }

  async getListData (ctx) {
    const { page, num, apiName } = ctx.request.body;
    const { prototype } = Index;

    if (!num) {
      ctx.body = INDEX.EMPTY_NUM;
      return;
    }

    if (!apiName) {
      ctx.body = COMMON.EMPTY_API_ANME;
      return;
    }

    if (typeof page !== 'number') {
      ctx.body = INDEX.INVALID_PAGE;
      return;
    }

    if (typeof num !== 'number') {
      ctx.body = INDEX.INVALID_NUM;
      return;
    }

    if (!prototype[apiName]) {
      ctx.body = COMMON.INVALID_API_ANME;
      return;
    }

    const offset = page * num;

    const query = {
      offset,
      limit: num,
      where: { status: 1 },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'status']
      },
      order: [['updatedAt', 'DESC']]
    };

    const [err, data] = await utils.asyncFunc(() => prototype[apiName](query));

    if (err) {
      ctx.body = { ...COMMON.ERROR, msg: err.message };
      return;
    }

    ctx.body = { ...INDEX.SUCCESS_GET_LIST_DATA, data };
  }

  async getCarouselData (query) {
    query.limit = 8;
    return Carousel.findAll(query);
  }

  async getPromoteData (query) {
    query.limit = 8;
    return Promote.findAll(query);
  }

  async getESportsData (query) {
    query.limit = 8;
    return ESports.findAll(query);
  }

  async getLiveData (query) {
    return Live.findAll(query);
  }

  async getFullData (query) {
    return FullRank.findAll(query);
  }

  async getOriginData (query) {
    return OriginRank.findAll(query);
  }

  async getCinemaData (query) {
    return CinemaRank.findAll(query);
  }

  async getBangumiData (query) {
    return BangumiRank.findAll(query);
  }

  async getRookieData (query) {
    return RookieRank.findAll(query);
  }
}

module.exports = new Index();
