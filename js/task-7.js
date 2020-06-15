'use strict'
import users from './users.js'

console.log('Задание 6-7!')

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users =>
  users.reduce((totalBalance, balances) => totalBalance + balances.balance, 0)

console.log(calculateTotalBalance(users)) // 20916
