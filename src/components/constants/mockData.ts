
export const spendingData = [
  { name: 'Shopping', value: 35, color: '#3B82F6' },
  { name: 'Food', value: 25, color: '#10B981' },
  { name: 'Travel', value: 15, color: '#6366F1' },
  { name: 'Bills', value: 20, color: '#F43F5E' },
  { name: 'Other', value: 5, color: '#6B7280' },
];

export const transactions = [
  { 
    id: '1', 
    merchant: 'Amazon', 
    amount: 39.99, 
    date: 'Today', 
    category: 'shopping' as const 
  },
  { 
    id: '2', 
    merchant: 'Starbucks', 
    amount: 5.75, 
    date: 'Yesterday', 
    category: 'food' as const 
  },
  { 
    id: '3', 
    merchant: 'Uber', 
    amount: 12.50, 
    date: '2 days ago', 
    category: 'transport' as const 
  },
  { 
    id: '4', 
    merchant: 'Netflix', 
    amount: 14.99, 
    date: '3 days ago', 
    category: 'entertainment' as const 
  },
];
