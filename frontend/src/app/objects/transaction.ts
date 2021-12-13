export interface Transaction {
  sender: string;
  receiver: string;
  email: string;
  amount: number;
  id: number;
  date: Date;
  isPayment: boolean;
}
