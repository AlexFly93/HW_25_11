//1) Написати функцію струлку, яка приймає безліч аргументів і повертає їх добуток.

const multArg = (initial = 0, ...arg) =>
  arg.reduce((sum, item) => sum * item, initial);

// 2) Є масив чисел, треба написати функцію, яка повертає масив з двох елементів, які є мінімальним і максимальним значенням джерельного масиву.
const nums1 = [4, 5, 7, 2, 65, 3, 8];
const onlyMaxAndMin = [];
const minAndMaxNum = (...arg) =>
  onlyMaxAndMin.push(
    Math.max.apply(null, ...arg),
    Math.min.apply(null, ...arg)
  );
minAndMaxNum(nums1);
console.log(onlyMaxAndMin);
