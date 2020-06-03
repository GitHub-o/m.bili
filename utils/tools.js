module.exports = {
  async asyncFunc (fn) {
    try {
      const { data } = await fn();
      return [null, data];

    } catch (err) {
      return [err, null];
    }
  }
}
