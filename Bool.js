const True  = (t, f) => t;
const False = (t, f) => f;

const If = c => t => o => c(t, o);

const Not = b => b(False, True);

const And = a => b => (t, f) => a(b(t, f), f);
const Or  = a => b => (t, f) => a(t, b(t, f));
const Xor = a => b => (t, f) => a(b(f, t), b(t, f));

const Nand = a => b => (t, f) => a(b(f, t), t);
const Nor  = a => b => (t, f) => a(f, b(f, t));
const Xnor = a => b => (t, f) => a(b(t, f), b(f, t)); // equal

// complementar
const AndC = a => b => (t, f) => a (b(f, t), f)
const NandC = a => b => (t, f) => a(b(t, f), t); // implies
const OrC = a => b => (t, f) => a(t, b(f, t))
const NorC = a => b => (t, f) => a(f, b(t, f))

const Implies = a => b => (t, f) => a(b(t, f), t); // NandC

const Majority3 = a => b => c => (t, f) =>
  a(b(t, c(t, f)), b(c(t, f), f));

const Minority3 = a => b => c => (t, f) =>
  a(b(f, c(f, t)), b(c(f, t), t));



// console.log(Not(True) ("true", "false"));
// console.log(Not(False) ("true", "false"));

// console.log(And(True)(True) ("true", "false"));
// console.log(And(True)(False) ("true", "false"));
// console.log(And(False)(True) ("true", "false"));
// console.log(And(False)(False) ("true", "false"));

// console.log(Or(True)(True) ("true", "false"));
// console.log(Or(True)(False) ("true", "false"));
// console.log(Or(False)(True) ("true", "false"));
// console.log(Or(False)(False) ("true", "false"));

// console.log(Xor(True)(True) ("true", "false"));
// console.log(Xor(True)(False) ("true", "false"));
// console.log(Xor(False)(True) ("true", "false"));
// console.log(Xor(False)(False) ("true", "false"));

// console.log(Nand(True)(True) ("true", "false"));
// console.log(Nand(True)(False) ("true", "false"));
// console.log(Nand(False)(True) ("true", "false"));
// console.log(Nand(False)(False) ("true", "false"));

// console.log(Nor(True)(True) ("true", "false"));
// console.log(Nor(True)(False) ("true", "false"));
// console.log(Nor(False)(True) ("true", "false"));
// console.log(Nor(False)(False) ("true", "false"));

// console.log(Xnor(True)(True) ("true", "false"));
// console.log(Xnor(True)(False) ("true", "false"));
// console.log(Xnor(False)(True) ("true", "false"));
// console.log(Xnor(False)(False) ("true", "false"));

// console.log(XnorNot(True)(True) ("true", "false"));
// console.log(XnorNot(True)(False) ("true", "false"));
// console.log(XnorNot(False)(True) ("true", "false"));
// console.log(XnorNot(False)(False) ("true", "false"));

// console.log(Implies(True)(True) ("true", "false"));
// console.log(Implies(True)(False) ("true", "false"));
// console.log(Implies(False)(True) ("true", "false"));
// console.log(Implies(False)(False) ("true", "false"));

console.log(Majority3(False)(True)(True) ("true", "false"));
console.log(Minority3(True)(True)(False) ("true", "false"));
