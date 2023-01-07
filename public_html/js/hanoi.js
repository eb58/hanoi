h = (n, l, c, r) => n === 0 ? [] : [...h(n - 1, l, r, c), [l, r], ...h(n - 1, c, l, r)]

range = n => [...Array(n).keys()];
clone = o => JSON.parse(JSON.stringify(o));
initial = (xs) => xs.slice(0, - 1);
last = (xs) => xs[xs.length - 1];
moveTo = (m, from, to) => ({ ...clone(m), ...{ [to]: [...m[to], last(m[from])], [from]: initial(m[from]) } });
hanoi = (n) => h(n, 'l', 'c', 'r').reduce(
   (acc, move, idx) => [...acc, moveTo(acc[idx], move[0], move[1])],   
   [{ l: range(n).map(x => x + 1).reverse(), c: [], r: [] }] // -> { l:[n...,3,2,1], c:[], r:[] }
);
