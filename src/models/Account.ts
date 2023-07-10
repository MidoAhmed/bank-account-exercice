import { TransactionType } from '../TransactionType.enum';
import { Customer } from './Customer';
import { Transaction } from './Transaction';
import { v4 as uuidv4 } from 'uuid';

export class Account {
  private accountId: string;
  private balance: number;
  private transactions: Transaction[] = [];
  private customer: Customer;

  constructor(accountId: string, balance: number, customer: Customer) {
    this.accountId = accountId;
    this.balance = balance;
    this.customer = customer;
  }

  getAccountId(): string {
    return this.accountId;
  }

  getBalance(): number {
    return this.balance;
  }

  getCustomer(): Customer {
    return this.customer;
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  deposit(amount: number): void {
    this.balance += amount;
    const operation: Transaction = new Transaction(
      uuidv4(),
      TransactionType.DEPOSIT,
      amount,
      new Date(),
    );
    this.transactions.push(operation);
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      const operation: Transaction = new Transaction(
        uuidv4(),
        TransactionType.WITHDRAWAL,
        amount,
        new Date(),
      );
      this.transactions.push(operation);
    } else {
      throw new Error('Insufficient balance');
    }
  }
}
