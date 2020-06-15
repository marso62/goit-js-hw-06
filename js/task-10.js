'use strict'
import users from './users.js'

console.log('Задание 6-10!')

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и
// они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users =>
  users.reduce((acc, value) => [...acc, ...value.skills], []).sort()

console.log(getSortedUniqueSkills(users))
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// вариант 2
// const getSortedUniqueSkills = users => {
//   return new Set(users.flatMap(user => user.skills).sort())
// }

// console.log([...getSortedUniqueSkills(users)])

// вариант 3
// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((allSkills, user) => {
//       allSkills.push(...user.skills)
//       return allSkills
//     }, [])
//     .filter((user, index, arr) => arr.indexOf(user) === index)
//     .sort()
// }

// console.log(getSortedUniqueSkills(users))
