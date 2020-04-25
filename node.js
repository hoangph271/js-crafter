// const, let
var name = 'Hoang';
name === 'Hoang'
name == 'Hoang'

/* var isValidAge = 12 === '12'

if (isValidAge) {
  console.info('Valid age')
} else {
  console.info('Invalid age')
} */

// * Basic data types `number`, `null`, 'string`, 'undefined`, `boolean`
console.info(typeof 12) // ! JS only has `number`
console.info(typeof 12.4) // ! JS only has `number`
console.info(10 / 'a')
console.info(typeof NaN) // ! JS only has `number`
console.info(NaN === NaN)
console.info(typeof true)
console.info(typeof name)
console.info(typeof undefined)
console.info(typeof null) // ! BUG...!

console.info('-- Objects')
const me = { name: '@HHP', age: 23 } // * No class, no interfaces
const em = { name: '@HHP', age: 23 } // * No class, no interfaces
console.info(typeof me.name)
console.info(me == em)
console.info(me === em)
// ? Arrays
const names = [me.name, em.name, me.age, null, NaN, {}, []]
console.info(typeof names)
// names.forEach(name => console.info(name))
