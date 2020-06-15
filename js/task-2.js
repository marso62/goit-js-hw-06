'use strict'
import users from './users.js'

console.log('Задание 6-2!')

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color)

console.table(getUsersWithEyeColor(users, 'blue')) // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
