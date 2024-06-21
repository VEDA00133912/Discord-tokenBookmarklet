javascript:(function() {
  window.webpackChunkdiscord_app.push([
    [Math.random()],
    {},
    req => {
      if (!req.c) return;
      for (const m of Object.keys(req.c)
        .map(x => req.c[x].exports)
        .filter(x => x)) {
        if (m.default && m.default.getToken !== undefined) {
          return navigator.clipboard.writeText(m.default.getToken()).then(() => {
            alert('トークンがクリップボードにコピーされました！');
          });
        }
        if (m.getToken !== undefined) {
          return navigator.clipboard.writeText(m.getToken()).then(() => {
            alert('トークンがクリップボードにコピーされました！');
          });
        }
      }
    },
  ]);
})();
// https://github.com/aiko-chan-ai/discord.js-selfbot-v13
