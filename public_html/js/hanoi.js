const h = (n, l, c, r) => n === 0 ? [] : [...h(n - 1, l, r, c), [l, r], ...h(n - 1, c, l, r)];
const range = n => [...Array(n).keys()];
const clone = o => JSON.parse(JSON.stringify(o));
const initial = (xs) => xs.slice(0, - 1);
const last = (xs) => xs[xs.length - 1];
const hanoi = (n) => {
   const model = { l: range(n).map(x => x + 1).reverse(), c: [], r: [] }; // -> { l:[n...,3,2,1], c:[], r:[] }
   const moveTo = (m, from, to) => ({ ...clone(m), ...{ [to]: [...m[to], last(m[from])], [from]: initial(m[from]) } });
   return h(n, 'l', 'c', 'r').reduce((acc, move, idx) => [...acc, moveTo(acc[idx], move[0], move[1])], [model]);
};