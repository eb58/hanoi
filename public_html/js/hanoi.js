/* global _ */

var hanoi = function (n) {
   var m = {l: _.range(1, n + 1).reverse(), c: [], r: []}; // -> { l:[n...,3,2,1], c:[], r:[] }
   var cnt = 1;
   var v = hanoiview(n);
   v.drawModel(m);

   function draw() {
      var cm = $.extend(true, {}, m);
      return function () {
         v.drawModel(cm);
      };
   }

   (function h(n, l, c, r) {
      if (n === 0) return;
      h(n - 1, l, r, c);
      r.push(l.pop());
      setTimeout(draw(), 1000 * cnt++);
      h(n - 1, c, l, r);
   })(n, m.l, m.c, m.r);
};
