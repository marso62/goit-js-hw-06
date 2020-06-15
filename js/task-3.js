'use strict'
import users from './users.js'

console.log('Задание 6-3!')

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name)

console.log(getUsersWithGender(users, 'male')) // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
