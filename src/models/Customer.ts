import { Account } from './Account';

export class Customer {
  private customerId: string;
  private name: string;
  private address: string;
  private accounts: Account[] = [];

  constructor(customerId: string, name: string, address: string) {
    this.customerId = customerId;
    this.name = name;
    this.address = address;
  }

  getCustomerId(): string {
    return this.customerId;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  getAccounts(): Account[] {
    return this.accounts;
  }
}
