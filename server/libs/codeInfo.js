module.exports = {
  COMMON: {
    EMPTY_VALUE: {
      code: 10001,
      msg: 'The account or password is empty'
    },
    INVALID_ACCOUNT: {
      code: 10002,
      msg: 'The account is invalid'
    },
    NOT_EXIST: {
      code: 10003,
      msg: 'The user doesn\'t exist'
    },
    INVALID_ACCOUT_LENGTH: {
      code: 10004,
      msg: 'The account length is 5'
    },
    INVALID_PASSWORD_LENGTH: {
      code: 10005,
      msg: 'The password length is 5-20'
    },
    UNLOGIN_STATUS: {
      code: 10006,
      msg: 'This is unlogin status'
    },
    NO_DATA: {
      code: 10007,
      msg: 'The isn\'t data in database'
    },
    EMPTY_API_ANME: {
      code: 10008,
      msg: 'The api_name is empty'
    },
    INVALID_API_ANME: {
      code: 10009,
      msg: 'The api_name is invalid'
    },
    ERROR: {
      code: 10010
    },
    LOGIN_STATUS: {
      code: 0,
      msg: 'This is login status'
    },
    LOGOUT_SUCCESS: {
      code: 0,
      msg: 'Logout success'
    }
  },

  INDEX: {
    EMPTY_PAGE: {
      code: 20001,
      msg: 'The list page is empty'
    },
    EMPTY_NUM: {
      code: 20002,
      msg: 'The list num is empty'
    },
    INVALID_NUM: {
      code: 20003,
      msg: 'The num is invalid'
    },
    INVALID_PAGE: {
      code: 20004,
      msg: 'The list page is invalid'
    },
    EMPTY_FIELD: {
      code: 20005,
      msg: 'The field is empty'
    },
    INVALID_FIELD: {
      code: 20006,
      msg: 'The field is invalid'
    },
    EMPTY_TAGS: {
      code: 20007,
      msg: 'The tags is empty'
    },
    SUCCESS_GET_HOME_DATA: {
      code: 0,
      msg: 'Home data get success'
    },
    SUCCESS_GET_LIST_DATA: {
      code: 0,
      msg: 'List data get success'
    },
    SUCCESS_GET_FEATURE_DATA: {
      code: 0,
      msg: 'Data get success'
    },
  }
}
