export const list = (val, list) => (type) => (type) ? val : list;

export const head = l => l(true);

export const tail = l => l(false);

export const compare = (l1, l2) => JSON.stringify(to_array(l1)) === JSON.stringify(to_array(l2));

export const from_array = l => (l.length === 1) ? list(l.shift(), null) : list(l.shift(), from_array(l));

export const to_array = l => (tail(l) == null) ? [head(l)] : [head(l), ...to_array(tail(l))];

export const nth = (l, n) => (n === 0) ? head(l) : nth(tail(l), n - 1);

export const map = (l, p) => foldl(l, (val, next) => list(p(val), next), null);

export const filter = (l, c) => foldl(l, (val, next) => c(val) ? list(val, next) : next, null);

export const foldl = (l, fn, c) => (tail(l) == null) ? fn(head(l), c) : fn(head(l), foldl(tail(l), fn, c));

export const foldr = (l, fn, c) => (tail(l) == null) ? fn(head(l), c) : fn(foldr(tail(l), fn, c), head(l));

export const append = (l1, l2) => from_array([...to_array(l1), ...to_array(l2)]);
