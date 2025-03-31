
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SlideProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({ title, children, className }) => {
  return (
    <div className={cn("min-h-screen flex flex-col p-6 md:p-10", className)}>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-finance-darkblue">{title}</h1>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Slide;
