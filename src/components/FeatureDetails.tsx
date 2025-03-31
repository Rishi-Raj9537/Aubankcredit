
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

export interface FeatureDetailProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bulletPoints: string[];
}

interface FeatureDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  feature: FeatureDetailProps | null;
}

const FeatureDetails: React.FC<FeatureDetailsProps> = ({ isOpen, onClose, feature }) => {
  if (!feature) return null;
  
  const { title, description, icon: Icon, bulletPoints } = feature;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className="h-6 w-6 text-finance-blue" />
            <span>{title}</span>
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        <Card className="mt-4 border-0 shadow-none">
          <CardContent className="p-0">
            <ul className="space-y-2">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-finance-blue flex items-center justify-center text-white text-xs mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureDetails;
