const Nil = (c, n) => n
const Cons = (h, t) => (c, n) => c(h, t)

const Append = (xs, x) => 
  xs(
    (h, t) => (Cons (h, Append(t, x))), 
    Cons(x, Nil)
  )

const Concat = (xs, ys) =>
  xs(
    (h, t) => Cons(h, Concat(t, ys)),
    ys
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


const Range = n => RangeAux(0, n)  
  
const RangeAux = (m, n) =>
  n == m 
    ? Nil
    : Cons(m, (RangeAux((m +1), n)))


const Length = xs => 
  xs(
    (h, t) => Length(t) + 1,
    0
  )

const Reduce = (xs, f, acc) =>
  xs(
    (h, t) => (Reduce (t, f, (f(h, acc))) ) ,
    acc
  )

const fromArray = xs => 
  xs.length === 0 
    ? Nil
    : Cons(xs[0], fromArray(xs.slice(1)))


const Show = list => 
  list(
    (head, tail) => [head, ...Show(tail)],
    []
  )

const list1 = Cons(1, Cons(2, Nil));
const list2 = Cons(3, Cons(4, Nil));

// console.log(Show(Map(Reverse(Concat(list1, list2)), (x) => x + 1)))
// console.log(Show(Concat(list1, list2)))
// console.log(Show(Reverse(fromArray([1, 2, 3, 4]))))
// console.log((Reduce((Concat(list1, list2)), ((x, y) => x + y ), 0)))
console.log(Show(Range(5)))



