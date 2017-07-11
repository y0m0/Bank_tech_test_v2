var Transaction = require('../lib/transaction');

class TransactionHistory {

  constructor(){
    this.transactions = {};
  }

  addTransaction(amount, date = Date.now()){
    this.transactions[date] = new Transaction(amount);
  }

  getTransactions(){
    return this.transactions;
  }
}

module.exports = TransactionHistory;
