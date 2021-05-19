const hanoi = (n, l, c, r) => n === 0 ? [] : [...hanoi(n - 1, l, r, c), [l, r], ...hanoi(n - 1, c, l, r)];
const hanoiX = (n) => {
   const range = n => [...Array(n).keys()];
   const model = { l: range(n).map(x => x + 1).reverse(), c: [], r: [] }; // -> { l:[n...,3,2,1], c:[], r:[] }
   const result = [$.extend(true, {}, model)];
   h(n, model);
   return result;
};
