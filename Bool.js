const True  = (t, f) => t;
const False = (t, f) => f;

const If  = (c, t, o) => c(t, o);

const Not = b => b(False, True);

const And = (a, b) => (t, f) => a (b(t, f), f)

const Or = (a, b) => (t, f) => a (t, b(t, f))

const Xor = (a, b) => (t, f) => a (b(f, t), b(t, f)) 

const Nand = (a, b) => (t, f) => a(b(f, t), t)

const Nor = (a, b) => (t, f) => a(f, b(f, t))

const Xnor = (a, b) => (t, f) => a(b(t, f), b(f, t))

console.log(Xnor(True, False) ("true", "false"));



