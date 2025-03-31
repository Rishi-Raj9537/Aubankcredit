
import React from 'react';
import { cn } from '@/lib/utils';

interface CreditCardProps {
  number: string;
  name: string;
  expiry: string;
  type: 'visa' | 'mastercard' | 'amex';
  className?: string;
}

const CreditCard: React.FC<CreditCardProps> = ({
  number,
  name,
  expiry,
  type,
  className
}) => {
  const formatCardNumber = (num: string) => {
    // Show only last 4 digits
    return `•••• •••• •••• ${num.slice(-4)}`;
  };
  
  const getCardTypeIcon = () => {
    switch(type) {
      case 'visa':
        return (
          <div className="text-white font-bold italic text-xl tracking-widest">VISA</div>
        );
      case 'mastercard':
        return (
          <div className="text-white font-bold text-xl tracking-widest">MASTERCARD</div>
        );
      case 'amex':
        return (
          <div className="text-white font-bold text-xl tracking-widest">AMEX</div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn(
      "w-full max-w-md h-56 rounded-xl relative overflow-hidden p-6 shadow-lg",
      type === 'visa' ? 'bg-gradient-to-r from-finance-blue to-finance-lightblue' : 
      type === 'mastercard' ? 'bg-gradient-to-r from-finance-darkblue to-finance-blue' : 
      'bg-gradient-to-r from-finance-darkblue to-finance-blue',
      className
    )}>
      <div className="absolute top-4 right-4">
        {getCardTypeIcon()}
      </div>
      
      <div className="flex flex-col h-full justify-between">
        <div className="w-12 h-12 rounded-full bg-yellow-400/90 mb-4 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-yellow-300"></div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="text-white text-xl font-mono tracking-wider">
            {formatCardNumber(number)}
          </div>
          
          <div className="flex justify-between">
            <div className="space-y-1">
              <p className="text-white/80 text-xs uppercase">Card Holder</p>
              <p className="text-white font-medium">{name}</p>
            </div>
            <div className="space-y-1">
              <p className="text-white/80 text-xs uppercase">Expires</p>
              <p className="text-white font-medium">{expiry}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
