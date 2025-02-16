const True = (t, f) => t;
const False = (t, f) => f;

const If = (condition, then, otherwise) => condition(then, otherwise);

const Not = b => b(False, True);

console.log(Not(True) ("true", "false"));


