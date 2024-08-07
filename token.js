javascript:(function() {
  window.webpackChunkdiscord_app.push([
    [Math.random()],
    {},
    req => {
      for (const m of Object.values(req.c).map(x => x.exports).filter(x => x)) {
        const token = m.default?.getToken ?? m.getToken;
        if (token) {
          navigator.clipboard.writeText(token()).then(() => {
            alert('トークンがクリップボードにコピーされました！');
          });
          break;
        }
      }
    },
  ]);
})();
