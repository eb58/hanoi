const hanoi = (n) => {
   const range = n => [...Array(n).keys()];
   const model = { l: range(n).map(x=>x+1).reverse(), c: [], r: [] }; // -> { l:[n...,3,2,1], c:[], r:[] }
   const result = [$.extend(true, {}, model)];

   const h = (n, m) => {
      if (n > 0) {
         h(n - 1, { l: m.l, c: m.r, r: m.c });
         m.r.push(m.l.pop());
         result.push($.extend(true, {}, model));
         h(n - 1, { l: m.c, c: m.l, r: m.r });
      }
   }
   h(n, model);
   console.log( result)
   return result;
};
