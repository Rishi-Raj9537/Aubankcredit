
import React from 'react';
import { 
  ShoppingBag, 
  Coffee, 
  Home, 
  Car, 
  ShoppingCart, 
  Utensils, 
  Plane
} from 'lucide-react';

interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  date: string;
  category: 'shopping' | 'food' | 'travel' | 'transport' | 'housing' | 'entertainment' | 'other';
}

interface TransactionListProps {
  transactions: Transaction[];
  className?: string;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, className }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'shopping':
        return <ShoppingBag className="h-5 w-5 text-finance-blue" />;
      case 'food':
        return <Utensils className="h-5 w-5 text-finance-green" />;
      case 'travel':
        return <Plane className="h-5 w-5 text-finance-lightblue" />;
      case 'transport':
        return <Car className="h-5 w-5 text-finance-gray" />;
      case 'housing':
        return <Home className="h-5 w-5 text-finance-red" />;
      case 'entertainment':
        return <ShoppingCart className="h-5 w-5 text-purple-500" />;
      default:
        return <Coffee className="h-5 w-5 text-finance-gray" />;
    }
  };

  return (
    <div className={className}>
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                {getCategoryIcon(transaction.category)}
              </div>
              <div>
                <p className="font-medium">{transaction.merchant}</p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span className="font-semibold">${transaction.amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
