var TransactionHistory = require('../lib/transactionHistory');

describe('TransactionHistory', () => {
  var transactionHistory;
  var transaction;

  beforeEach(() => {
    transaction = jasmine.createSpy('transaction');
    transactionHistory = new TransactionHistory(transaction);
  });

  describe('#addTransaction', () => {
    transactionHistory.addTransaction();
    expect(transactionHistory.getTransactions).toEqual([transaction]);
  });
});
