import API from './config'
import request from '~/utils/request'

export const getHomeData = () =>
  request({
    url: API.GET_HOME_DATA,
    method: 'get'
  })

export const getListData = (data) =>
  request({
    url: API.GET_LIST_DATA,
    method: 'post',
    data
  })

export const getFeatureData = (data) =>
  request({
    url: API.GET_FEATURE_DATA,
    method: 'post',
    data
  })
