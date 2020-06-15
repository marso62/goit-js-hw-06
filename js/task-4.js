'use strict'
import users from './users.js'

console.log('Задание 6-4!')

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => users.filter(user => user.isActive !== true)

console.log(getInactiveUsers(users)) // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
