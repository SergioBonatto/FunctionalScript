const True  = (t, f) => t;
const False = (t, f) => f;

const If  = (c, t, o) => c(t, o);
const Not = b => b(False, True);
const And = (b1, b2) => (t, f) => b1 (b2(t, f), f)

console.log(And(False, True) ("true", "false"));


