var TransactionHistory = require('../lib/transactionHistory');

describe('TransactionHistory', () => {
  var transactionHistory;
  var transaction;
  var date;

  beforeEach(() => {
    transaction = jasmine.createSpy('transaction');
    transactionHistory = new TransactionHistory();
    date = Date.now().toString();
  });

  describe('#addTransaction', () => {
    it('adds a new transaction to transactions', () => {
      var amount = 10.0;
      transactionHistory.addTransaction(amount, date);
      expect(transactionHistory.transactions[date]).toBeTruthy();
    });

    it('knows when transaction where made', () => {
      var amount = 10.0;
      transactionHistory.addTransaction(amount, date);
      expect(Object.keys(transactionHistory.transactions)[0]).toEqual(date);
    });
  });

  describe('#getTransactions', () => {
    it('returns all the transactions', () => {
      transactionHistory.transactions[date] = transaction;
      expect(transactionHistory.getTransactions()).not.toBe({});
    });
  });

});
