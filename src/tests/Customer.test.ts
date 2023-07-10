import { Account } from '../models/Account';
import { Customer } from '../models/Customer';

describe('Customer', () => {
  let customer: Customer;

  beforeEach(() => {
    customer = new Customer('123', 'John Doe', '123 Main St');
  });

  // Tests that a new Customer object can be created with valid parameters
  it('test_creating_new_customer_object_with_valid_parameters', () => {
    expect(customer.getCustomerId()).toBe('123');
    expect(customer.getName()).toBe('John Doe');
    expect(customer.getAddress()).toBe('123 Main St');
    expect(customer.getAccounts()).toEqual([]);
  });

  // Tests that the getCustomerId() method returns the correct customer ID
  it('test_get_customer_id', () => {
    expect(customer.getCustomerId()).toBe('123');
  });

  // Tests that the getName() method returns the correct customer name
  it('test_get_customer_name', () => {
    expect(customer.getName()).toBe('John Doe');
  });
  // Tests that the getAddress() method returns the correct customer address
  it('test_get_customer_address', () => {
    expect(customer.getAddress()).toBe('123 Main St');
  });

  // Tests that the getAccounts() method returns the correct array of accounts
  it('test_get_accounts', () => {
    const account1 = new Account('1', 100, customer);
    const account2 = new Account('2', 200, customer);
    customer.getAccounts().push(account1);
    customer.getAccounts().push(account2);
    expect(customer.getAccounts()).toEqual([account1, account2]);
  });

  // Tests that a new account can be added to a customer with an existing account
  it('test_add_account_with_existing_account', () => {
    const account1 = new Account('1', 100, customer);
    const account2 = new Account('2', 200, customer);
    customer.getAccounts().push(account1);
    expect(customer.getAccounts().length).toBe(1);
    customer.getAccounts().push(account2);
    expect(customer.getAccounts().length).toBe(2);
  });

  // Tests that a new account can be added to the customer
  it('test_add_account_to_customer', () => {
    const account = new Account('1', 100, customer);
    customer.getAccounts().push(account);
    expect(customer.getAccounts().length).toBe(1);
    expect(customer.getAccounts()[0]).toBe(account);
  });

  // Tests that an account is removed from the customer's accounts array
  it('test_removing_account_from_customer', () => {
    const account1 = new Account('1', 100, customer);
    const account2 = new Account('2', 200, customer);
    customer.getAccounts().push(account1, account2);
    expect(customer.getAccounts().length).toBe(2);
    customer.getAccounts().splice(0, 1);
    expect(customer.getAccounts().length).toBe(1);
    expect(customer.getAccounts()[0]).toBe(account2);
  });

  // Tests that the getAccounts method returns the correct number of accounts for the customer
  it('test_get_number_of_accounts', () => {
    expect(customer.getAccounts().length).toBe(0);
    const account1 = new Account('1', 100, customer);
    customer.getAccounts().push(account1);
    expect(customer.getAccounts().length).toBe(1);
    const account2 = new Account('2', 200, customer);
    customer.getAccounts().push(account2);
    expect(customer.getAccounts().length).toBe(2);
  });
});
