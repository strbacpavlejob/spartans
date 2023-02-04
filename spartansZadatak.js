const memo = (func) => {
  const cache = {};
  return (...args) => {
    const argsKey = JSON.stringify(args, Object.keys(args).sort());
    if (!cache[argsKey]) {
      console.log("Saves values to cache");
      cache[argsKey] = func(...args);
    } else {
      console.log("Gets values from cache");
    }
    return cache[argsKey];
  };
};

const arr1 = ["1", "2"];
const arr2 = ["1", "2"];
const obj1 = {
  a: "a",
  b: {
    c: "c",
  },
};
const obj2 = {
  b: {
    c: "c",
  },
  a: "a",
};
const exampleFun = (arr, obj) => {
  return arr.length + obj.a;
};

const newFunction = memo(exampleFun);

console.log("Examples...");
console.log(`Result: ${newFunction(arr1, obj1)}`); //save
console.log(`Result: ${newFunction(arr1, obj1)}`); //get
console.log(`Result: ${newFunction(arr2, obj1)}`); //get
console.log(`Result: ${newFunction(arr2, obj2)}`); //get
console.log(`Result: ${newFunction([4, 5, 6], obj1)}`); //save
