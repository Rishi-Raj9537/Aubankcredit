
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { CreditCard, FileText, ShieldCheck, Zap, Award, BarChart4, Settings, HeadphonesIcon } from 'lucide-react';
import { FeatureDetailProps } from '@/components/FeatureDetails';

interface FunctionalityFeaturesProps {
  onFeatureClick: (feature: FeatureDetailProps) => void;
}

export const primaryFeatures: FeatureDetailProps[] = [
  {
    title: "Balance & Payment",
    description: "Manage your credit card balance and payments effectively",
    icon: CreditCard,
    bulletPoints: [
      "View current balance with detailed breakdown",
      "Set up auto-payments and reminders",
      "Schedule one-time or recurring payments",
      "View payment history and upcoming payments"
    ]
  },
  {
    title: "Transaction History",
    description: "Track all your transactions in one place",
    icon: FileText,
    bulletPoints: [
      "Search and filter transactions by date, amount, or category",
      "Export transaction data in multiple formats",
      "Dispute unauthorized transactions directly",
      "Tag and categorize transactions for better tracking"
    ]
  },
  {
    title: "Security Controls",
    description: "Keep your card safe with advanced security features",
    icon: ShieldCheck,
    bulletPoints: [
      "Freeze or unfreeze your card instantly",
      "Set purchase limits by category or merchant type",
      "Receive real-time fraud alerts via SMS or email",
      "Manage online shopping and international transaction settings"
    ]
  },
];

export const secondaryFeatures: FeatureDetailProps[] = [
  {
    title: "Rewards Management",
    description: "Maximize your credit card rewards and benefits",
    icon: Award,
    bulletPoints: [
      "Track points, cashback, and miles earned",
      "Browse available redemption options",
      "View special offers and promotions",
      "Set up rewards alerts for expiring points"
    ]
  },
  {
    title: "Spending Analysis",
    description: "Gain insights into your spending habits",
    icon: BarChart4,
    bulletPoints: [
      "Visualize spending by category and time period",
      "Compare monthly spending trends",
      "Receive personalized savings recommendations",
      "Set budget goals and track progress"
    ]
  },
  {
    title: "Card Settings",
    description: "Customize your card experience to fit your needs",
    icon: Settings,
    bulletPoints: [
      "Update personal information and contact details",
      "Manage autopay settings and notification preferences",
      "Adjust statement delivery options",
      "Request credit limit increases or card upgrades"
    ]
  },
  {
    title: "Support & Services",
    description: "Get help when you need it",
    icon: HeadphonesIcon,
    bulletPoints: [
      "Chat with customer support representatives in real-time",
      "Access FAQs and troubleshooting guides",
      "Submit service requests and track their status",
      "Schedule callbacks for complex issues"
    ]
  },
];

const FunctionalityFeatures: React.FC<FunctionalityFeaturesProps> = ({ onFeatureClick }) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary Features</h3>
        <div className="grid grid-cols-3 gap-4">
          {primaryFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              onClick={() => onFeatureClick(feature)}
              iconClassName="text-finance-blue"
            />
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Secondary Features</h3>
        <div className="grid grid-cols-4 gap-4">
          {secondaryFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              onClick={() => onFeatureClick(feature)}
              iconClassName="text-purple-600"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunctionalityFeatures;
