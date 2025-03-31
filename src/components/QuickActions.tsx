
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { DollarSign, LockKeyhole, Receipt, ArrowLeftRight } from 'lucide-react';

const QuickActions: React.FC = () => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
        <FeatureCard 
          icon={DollarSign} 
          title="Pay Bill" 
          iconClassName="text-purple-600"
        />
        <FeatureCard 
          icon={LockKeyhole} 
          title="Lock Card" 
          iconClassName="text-purple-700"
        />
        <FeatureCard 
          icon={Receipt} 
          title="Statements" 
          iconClassName="text-purple-800"
        />
        <FeatureCard 
          icon={ArrowLeftRight} 
          title="Transfer" 
          iconClassName="text-purple-900"
        />
      </div>
    </div>
  );
};

export default QuickActions;
