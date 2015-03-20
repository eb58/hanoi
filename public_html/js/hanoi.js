var hanoi = function (n) {
   var v = hanoiview(n);
   var gm = {l: _.range(1, n + 1).reverse(), c: [], r: []}; // -> { l:[n...,3,2,1], c:[], r:[] }
   var cnt = 0;
   function h(n, m) {
      if (n === 0) return;
      h(n - 1, {l: m.l, c: m.r, r: m.c});
      m.r.push(m.l.pop());
      var cgm = $.extend(true, {}, gm);
      setTimeout(function () {
         v.drawModel(cgm);
      }, 1000 * cnt++);//
      h(n - 1, {l: m.c, c: m.l, r: m.r});
   }
   v.drawModel(gm);
   h(n, gm);
};
