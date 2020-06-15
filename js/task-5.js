'use strict'
import users from './users.js'

console.log('Задание 6-5!')

// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) =>
  users.find(person => person.email === email)
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')) // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')) // {объект пользователя Elma Head}
