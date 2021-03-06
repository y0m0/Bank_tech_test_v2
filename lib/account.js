var TransactionHistory = require('../lib/transactionHistory');

// Understand ???
class Account{

  constructor(transactionHistory){
    this.transactionHistory = typeof TransactionHistory !== 'undefined' ? transactionHistory : new TransactionHistory();
  }

  deposit(amount){
    this.transactionHistory.addTransaction(amount);
  }

  withdraw(amount){
    this.transactionHistory.addTransaction(-amount);
  }
}

module.exports = Account;
