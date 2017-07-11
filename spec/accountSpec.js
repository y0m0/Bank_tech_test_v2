var Account = require('../lib/account');

describe('Account', () => {
  var account;
  var transactionHistory;

  beforeEach(() => {
    transactionHistory = jasmine.createSpyObj('transactionHistory', ['addTransaction']);
    account = new Account(transactionHistory);
  });


  describe('#deposit', () => {

    it('creates a new deposit transaction', () => {
      account.deposit(10.0);
      expect(transactionHistory.addTransaction).toHaveBeenCalled();
    });
  });


  describe('#withdraw', () => {
    it('creates a new withdraw transaction', () => {
      account.withdraw(10.0);
      expect(transactionHistory.addTransaction).toHaveBeenCalled();
    });
  });
});
