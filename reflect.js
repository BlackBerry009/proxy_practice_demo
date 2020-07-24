const obj = {
  a: 1,
  b: 2
};

console.log(Reflect.get(obj,"a"))
Reflect.set(obj,"v","asdsa")
console.log(obj)
