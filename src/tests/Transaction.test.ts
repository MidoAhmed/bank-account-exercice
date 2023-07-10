import { TransactionType } from '../shared/enums/TransactionType';
import { Transaction } from '../models/Transaction';

describe('Transaction', () => {
  let transaction: Transaction;

  beforeEach(() => {
    transaction = new Transaction(
      '123',
      TransactionType.DEPOSIT,
      100,
      new Date(),
    );
  });

  // Tests that a new Transaction object can be created with valid parameters
  it('test_create_new_transaction_with_valid_parameters', () => {
    expect(transaction.getTransactionId()).toBe('123');
    expect(transaction.getType()).toBe(TransactionType.DEPOSIT);
    expect(transaction.getAmount()).toBe(100);
    expect(transaction.getDate()).toBeInstanceOf(Date);
  });

  // Tests that getTransactionId() returns the transaction ID
  it('test_get_transaction_id', () => {
    expect(transaction.getTransactionId()).toBe('123');
  });

  // Tests that getType() returns the correct transaction type
  it('test_get_type', () => {
    expect(transaction.getType()).toBe(TransactionType.DEPOSIT);
  });

  // Tests that the getDate() method returns the transaction date
  it('test_get_date', () => {
    expect(transaction.getDate()).toBeInstanceOf(Date);
  });

  // Tests that getAmount() returns the transaction amount
  it('test_get_amount', () => {
    expect(transaction.getAmount()).toBe(100);
  });

  // Tests that a new Transaction object with an empty transaction ID can be created
  it('test_create_transaction_with_empty_id', () => {
    transaction = new Transaction('', TransactionType.DEPOSIT, 100, new Date());
    expect(transaction.getTransactionId()).toBe('');
  });

  // Tests that a new Transaction object can be created with the maximum transaction amount
  it('test_create_transaction_with_maximum_amount', () => {
    transaction = new Transaction(
      '123',
      TransactionType.DEPOSIT,
      Number.MAX_SAFE_INTEGER,
      new Date(),
    );
    expect(transaction.getTransactionId()).toBe('123');
    expect(transaction.getType()).toBe(TransactionType.DEPOSIT);
    expect(transaction.getAmount()).toBe(Number.MAX_SAFE_INTEGER);
  });

  // Tests that a new Transaction object can be created with the minimum transaction amount
  it('test_create_new_transaction_with_minimum_amount', () => {
    transaction = new Transaction(
      '123',
      TransactionType.DEPOSIT,
      0.01,
      new Date(),
    );
    expect(transaction.getTransactionId()).toBe('123');
    expect(transaction.getType()).toBe(TransactionType.DEPOSIT);
    expect(transaction.getAmount()).toBe(0.01);
    expect(transaction.getDate()).toBeInstanceOf(Date);
  });

  // Tests that a new Transaction object can be created with the current date
  it('test_create_new_transaction_with_current_date', () => {
    transaction = new Transaction(
      '123',
      TransactionType.DEPOSIT,
      100,
      new Date(),
    );
    expect(transaction).toBeInstanceOf(Transaction);
    expect(transaction.getDate()).toEqual(new Date());
  });

  // Tests that a new Transaction object can be created with a date in the past
  it('test_create_transaction_with_past_date', () => {
    transaction = new Transaction(
      '1',
      TransactionType.DEPOSIT,
      100,
      new Date('2020-01-01'),
    );
    expect(transaction).toBeInstanceOf(Transaction);
    expect(transaction.getDate()).toEqual(new Date('2020-01-01'));
  });
});
