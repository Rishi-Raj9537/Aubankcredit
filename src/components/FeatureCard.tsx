
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  onClick,
  className
}) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <Icon className="h-6 w-6 mb-2 text-finance-blue" />
      <span className="text-sm font-medium text-center">{title}</span>
    </div>
  );
};

export default FeatureCard;
