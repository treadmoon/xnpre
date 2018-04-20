(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      clientWidth = clientWidth > 640 ? 640 : clientWidth;
      //docEl.style.fontSize = 10 * (clientWidth / 320) + 'px';
      docEl.style.fontSize = 20 * (clientWidth / 640) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false); //当 DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash
})(document, window);
