const True = (t, f) => t;
const False = (t, f) => f;

const If = (condition, then, otherwise) => condition(then, otherwise);

console.log(If(True, 'true', 'false')); // true
