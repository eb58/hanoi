/* global _ */

var hanoi = function (n) {
   var m = {l: _.range(1, n + 1).reverse(), c: [], r: []}; // -> { l:[n...,3,2,1], c:[], r:[] }
   var cnt = 1;
   var v = hanoiview(n);
   v.drawModel(m);

   (function hanoi(n, l, c, r) {
      if (n === 0) return;
      hanoi(n - 1, l, r, c);
      r.push(l.pop());
      setTimeout(function () {
         var cm = $.extend(true, {}, m);
         return function () {
            v.drawModel(cm);
         };
      }(), 1000 * cnt++);//
      hanoi(n - 1, c, l, r);
   })(n, m.l, m.c, m.r);
};
