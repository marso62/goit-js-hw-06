'use strict'
import users from './users.js'

console.log('Задание 6-8!')

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) =>
  users
    .filter(friend => friend.friends.some(e => e === friendName))
    .map(name => name.name)

console.log(getUsersWithFriend(users, 'Briana Decker')) // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')) // [ 'Elma Head', 'Sheree Anthony' ]
