import * as API from '~/api'
import tools from '~/utils/tools'

export const getListData = async (ctx, $data, type) => {
  $data.page++;

  type === 'up' ? ($data.upText = '加载中……') : ($data.downText = '刷新中……');

  const { num, apiName, page, duration } = $data;
  const { cache, scroll } = ctx;

  const conf = {
    page,
    num,
    apiName
  };

  const [err, res] = await tools.asyncFunc(() => API.getListData(conf));

  if (err) {
    ctx.$toast(err.message);
    return;
  }

  const { code, data } = res;

  if (code === 0) {
    if (data.length <= 0) {
      scroll &&
        setTimeout(() => {
          type === 'up' ? scroll.finishPullUp() : scroll.finishPullDown();
          type === 'up' && ($data.upText = '我是有底线的人');
          scroll.refresh();
        }, duration);
      $data.isLoadingShow = false;
      return;
    }

    type === 'up'
      ? ($data.upText = '加载完成')
      : ($data.downText = '刷新成功');
  } else {
    type === 'up'
      ? ($data.upText = '加载失败')
      : ($data.downText = '刷新失败');
  }

  setTimeout(() => {
    !cache[apiName] && (cache[apiName] = []);
    cache[apiName].push(data);

    ctx.$emit('update:data', ctx.data.concat(data));
    ctx.$nextTick(() => $data.isLoadingShow = false);

    if (scroll) {
      type === 'up' ? scroll.finishPullUp() : scroll.finishPullDown();
      scroll.refresh();
    }

    setTimeout(
      () =>
        type === 'up'
          ? ($data.upText = '上拉加载更多')
          : ($data.downText = '下拉刷新'),
      duration
    );
  }, duration);
}

export const checkCacheData = (ctx, $data, type) => {
  const { cache, scroll } = ctx;
  const { apiName } = $data;

  scroll && scroll.scrollTo(0, 0);

  if (!cache[apiName]) {
    $data.page = -1;
    $data.isLoadingShow = true;
    getListData(ctx, $data, type);
    return;
  }

  if (!cache[apiName][0]) {
    $data.page = -1;
    $data.isLoadingShow = true;
    getListData(ctx, $data, type);
    return;
  }

  $data.page = cache[apiName].length - 1;
  ctx.$nextTick(() => (ctx.$emit('update:data', ctx.getCacheData(cache[apiName]))));
}

export const handleChangeField = (ctx, $data, apiName) => {
  ctx.$emit('update:data', []);
  ctx.$nextTick(() => {
    $data.apiName = apiName;
    $data.downText = '下拉刷新';
    $data.upText = '上拉加载更多';

    checkCacheData(ctx, $data, 'down');
  });
}
