import { TransactionType } from '../shared/enums/TransactionType';
import { Account } from '../models/Account';
import { Customer } from '../models/Customer';

describe('Account', () => {
  let account: Account;
  let customer: Customer;

  beforeEach(() => {
    customer = new Customer('1', 'John Doe', '123 Main St');
    account = new Account('123456789', 1000, customer);
  });

  // Tests that deposit method increases the balance by the deposited amount
  test('should deposit money into the account', () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(1050);
  });

  test('should withdraw money from the account if balance is sufficient', () => {
    account.withdraw(200);
    expect(account.getBalance()).toBe(800);
  });

  // Tests that an error is thrown when trying to withdraw an amount larger than the account balance
  test('should not allow withdrawal if balance is insufficient', () => {
    expect(() => account.withdraw(1500)).toThrow('Insufficient balance');
    expect(account.getBalance()).toBe(1000);
  });

  //Tests that depositing a positive amount increases the account balance and adds a new transaction
  test('test deposit positive amount', () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(1050);
    expect(account.getTransactions().length).toBe(1);
    expect(account.getTransactions()[0].getType()).toBe(
      TransactionType.DEPOSIT,
    );
    expect(account.getTransactions()[0].getAmount()).toBe(50);
  });

  // Tests that depositing a large amount increases the account balance and adds a transaction
  test('test deposit large amount', () => {
    const depositAmount = 5000;
    account.deposit(depositAmount);
    expect(account.getBalance()).toBe(6000);
    expect(account.getTransactions().length).toBe(1);
    expect(account.getTransactions()[0].getType()).toBe(
      TransactionType.DEPOSIT,
    );
    expect(account.getTransactions()[0].getAmount()).toBe(depositAmount);
  });

  // Tests that depositing zero amount does not change the balance and does not create a new transaction
  test('test deposit zero amount', () => {
    const initialBalance = account.getBalance();
    const initialTransactionsLength = account.getTransactions().length;
    expect(() => account.deposit(0)).toThrow('Invalid amount');
    expect(account.getBalance()).toBe(initialBalance);
    expect(account.getTransactions().length).toBe(initialTransactionsLength);
  });

  // Tests that depositing negative amount does not change the balance and does not create a new transaction
  test('test deposit negative amount', () => {
    const initialBalance = account.getBalance();
    const initialTransactionsLength = account.getTransactions().length;
    expect(() => account.deposit(-500)).toThrow('Invalid amount');
    expect(account.getBalance()).toBe(initialBalance);
    expect(account.getTransactions().length).toBe(initialTransactionsLength);
  });

  // Tests that the withdraw method throws an error when the amount is zero
  test('test withdraw zero amount', () => {
    expect(() => account.withdraw(0)).toThrow('Invalid amount');
  });

  // Tests that an error is thrown when trying to withdraw a negative amount
  test('test withdraw negative amount', () => {
    expect(() => account.withdraw(-50)).toThrow('Invalid amount');
  });

  // Tests that the getCustomer method returns the correct customer object
  test('test get customer method', () => {
    expect(account.getCustomer()).toEqual(customer);
  });

  // Tests that the getBalance method returns the correct balance
  test('test get balance', () => {
    expect(account.getBalance()).toBe(1000);
  });

  // Tests that the getAccountId method returns the correct account ID
  test('test get account id', () => {
    expect(account.getAccountId()).toBe('123456789');
  });

  // Tests that the withdraw method correctly updates the balance and adds a new transaction when given a valid amount
  test('test withdraw valid amount', () => {
    account.withdraw(500);
    expect(account.getBalance()).toBe(500);
    expect(account.getTransactions().length).toBe(1);
    expect(account.getTransactions()[0].getType()).toBe(
      TransactionType.WITHDRAWAL,
    );
    expect(account.getTransactions()[0].getAmount()).toBe(500);
  });
});
