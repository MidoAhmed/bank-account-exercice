import { TransactionType } from '../shared/enums/TransactionType';

export class Transaction {
  private transactionId: string;
  private type: TransactionType;
  private amount: number;
  private date: Date;

  constructor(
    transactionId: string,
    type: TransactionType,
    amount: number,
    date: Date,
  ) {
    this.transactionId = transactionId;
    this.type = type;
    this.amount = amount;
    this.date = date;
  }

  getTransactionId(): string {
    return this.transactionId;
  }

  getType(): TransactionType {
    return this.type;
  }

  getAmount(): number {
    return this.amount;
  }

  getDate(): Date {
    return this.date;
  }
}
