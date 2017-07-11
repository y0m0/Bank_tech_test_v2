var Account = require('../lib/account');

describe('Account', () => {
  var account;
  var transactionHistory;

  beforeEach(() => {
    transactionHistory = jasmine.createSpyObj('transactionHistory', ['addTransaction']);
    account = new Account(transactionHistory);
  });


  describe('#deposit', () => {

    it('creates a new transaction', () => {
      account.deposit(10.0);
      expect(transactionHistory.addTransaction).toHaveBeenCalled();
    });
  });
});
