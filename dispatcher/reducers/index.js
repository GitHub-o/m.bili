import * as API from '~/api/index'
import tools from '~/utils/tools'

export const getHomeData = async (ctx, $data) => {
  const { scroll } = ctx;

  ctx.resetScrollOpt();

  const [err, res] = await tools.asyncFunc(API.getHomeData);

  if (err) {
    ctx.$toast(err.message);
    return;
  }

  const { data, code } = res;

  const { duration } = $data;

  if (code === 0) {
    const { carousel, promote, e_sports, live } = data;
    const { scrollData } = ctx;

    scrollData.carousel = carousel;
    scrollData.promote = promote;
    scrollData.e_sports = e_sports;
    scrollData.live = live;
    $data.downText = '刷新完成';
  } else {

    $data.downText = '刷新失败';
  }

  setTimeout(() => {
    if (scroll) {
      scroll.finishPullDown();
      scroll.refresh();
    }

    setTimeout(() => $data.downText = '下拉刷新', duration);
  }, duration);
}

export const getFeatureData = async (ctx, $data) => {
  const { scroll } = ctx;

  $data.upText = '加载中……';

  const { num, page, field, duration } = $data;

  const [err, res] = await tools.asyncFunc(
    () => API.getFeatureData({ num, page, field })
  );

  if (err) {
    ctx.$toast(err.message);
    return;
  }

  const { data, code } = res;

  if (code === 0) {
    $data.page++;

    if (data.length <= 0) {
      $data.upText = '宝宝加载完毕了';
      return;
    }

    $data.upText = '加载完成';
  } else {
    $data.upText = '加载失败';
  }

  setTimeout(() => {
    ctx.scrollData.feature.push(...data);
    scroll.finishPullUp();
    scroll.refresh();

    setTimeout(() => $data.upText = '上拉加载更多', duration);
  }, duration);
}
