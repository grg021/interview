export const list = (data, list) => ({ val: data, next: list})

export const head = l => l.val

export const tail = l => l.next

export const compare = (l1, l2) => JSON.stringify(l1) === JSON.stringify(l2)

export const from_array = arr => (arr.length === 1) ? list(arr.shift(), null) : list(arr.shift(), from_array(arr))

export const to_array = l => (tail(l) == null) ? [head(l)] : [head(l), ...to_array(tail(l))]

export const nth = (l, n) => (n == 0) ? head(l) : nth(tail(l), n-1)

export const map = (l, p) => foldl(l, (val, next) => list(p(val), next), null)

export const filter = (l, c) => foldl(l, (val, next) => c(val) ? list(val, next) : next, null)

export const foldl = (l, fn, c) => (tail(l) == null) ? fn(head(l), c) : fn(head(l), foldl(tail(l),fn,c))

export const foldr = (l, fn, c) => (tail(l) == null) ? fn(head(l), c) : fn(foldr(tail(l),fn,c), head(l))

export const append = (l1, l2) => from_array([...to_array(l1), ...to_array(l2)])
