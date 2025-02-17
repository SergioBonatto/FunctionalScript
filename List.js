const Nil = (c, n) => n
const Cons = (h, t) => (c, n) => c(h, t)

const Append = (xs, x) => 
  xs(
    (h, t) => (Cons (h, Append(t, x))), 
    Cons(x, Nil)
  )

const Concat = (xs, ys) =>
  ys(
    (h, t) => (Concat((Append(xs, h)), t)),
    xs
  )

const Reverse = xs =>
  xs(
    (h, t) => (Append (Reverse(t), h)),
    xs
  )

const Map = (xs, f) => 
  xs(
    (h, t) => (Cons ((f(h)), Map(t, f))),
    xs
  )

const Show = list => 
  list(
    (head, tail) => [head, ...Show(tail)],
    []
  )

const list1 = Cons(1, Cons(2, Nil));
const list2 = Cons(3, Cons(4, Nil));

console.log(Show(Map(Reverse(Concat(list1, list2)), (x) => x + 1)))




