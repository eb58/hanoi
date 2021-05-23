const hanoi = (n) => {
   const range = n => [...Array(n).keys()];
   const h = (n, l, c, r) => n === 0 ? [] : [...h(n - 1, l, r, c), [l, r], ...h(n - 1, c, l, r)];
   const model = { l: range(n).map(x => x + 1).reverse(), c: [], r: [] }; // -> { l:[n...,3,2,1], c:[], r:[] }
   const moveTo = (m, from, to) => {
      const res = { l: [...m.l], c: [...m.c], r: [...m.r] };
      res[to] = [...m[to], m[from][m[from].length - 1]];
      res[from] = m[from].slice(0, -1);
      return res;
   }
   return h(n, 'l', 'c', 'r').reduce((acc, move,idx) => [...acc, moveTo(acc[idx], move[0], move[1])], [model]);
};