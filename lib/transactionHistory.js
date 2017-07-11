var Transaction = require('../lib/transaction');

class TransactionHistory {

  constructor(){
    this.transactions = [];
  }

  addTransaction(amount){
    this.transactions.push(new Transaction(amount));
  }

  getTransactions(){
    return this.transactions;
  }
}

module.exports = TransactionHistory;
