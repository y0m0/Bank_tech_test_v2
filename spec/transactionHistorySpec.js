var TransactionHistory = require('../lib/transactionHistory');

describe('TransactionHistory', () => {
  var transactionHistory;
  var transaction;

  beforeEach(() => {
    transaction = jasmine.createSpy('transaction');
    transactionHistory = new TransactionHistory();
  });

  describe('#addTransaction', () => {
    it('adds a new transaction to transactions', () => {
      var amount = 10.0;
      transactionHistory.addTransaction(amount);
      expect(transactionHistory.transactions.length).toEqual(1);
    });
  });

  describe('#getTransactions', () => {
    it('returns all the transactions', () => {
      transactionHistory.transactions.push(transaction);
      expect(transactionHistory.getTransactions()).toEqual([transaction]);
    });
  });

});
