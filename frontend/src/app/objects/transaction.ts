export interface Transaction {
  sender: string;
  receiver: string;
  amount: number;
  id: number;
  date: Date;
  isPayment: boolean;
}
