
import React, { useState } from 'react';
import Slide from '@/components/Slide';
import CreditCard from '@/components/CreditCard';
import SpendingChart from '@/components/SpendingChart';
import TransactionList from '@/components/TransactionList';
import QuickActions from '@/components/QuickActions';
import FunctionalityFeatures from '@/components/FunctionalityFeatures';
import FeatureDetails, { FeatureDetailProps } from '@/components/FeatureDetails';
import { Bell, CreditCard as CreditCardIcon, FileText, PiggyBank, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface DashboardProps {
  spendingData: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  transactions: Array<{
    id: string;
    merchant: string;
    amount: number;
    date: string;
    category: 'shopping' | 'food' | 'travel' | 'transport' | 'housing' | 'entertainment' | 'other';
  }>;
}

const Dashboard: React.FC<DashboardProps> = ({ spendingData, transactions }) => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetailProps | null>(null);
  const [showFeatureDetails, setShowFeatureDetails] = useState(false);
  const [showFunctionalities, setShowFunctionalities] = useState(false);
  
  const goToRewards = () => {
    navigate('/rewards');
  };
  
  const goToRewardManagementDetail = () => {
    navigate('/reward-management-detail');
  };

  const handleFeatureClick = (feature: FeatureDetailProps) => {
    setSelectedFeature(feature);
    setShowFeatureDetails(true);
  };

  const toggleFunctionalities = () => {
    setShowFunctionalities(!showFunctionalities);
  };

  return (
    <Slide title="Dashboard Wireframe - Main View">
      <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
        {/* Header with notifications and Explore Features button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">My Credit Card</h2>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={toggleFunctionalities}
              className="text-finance-blue border-finance-blue hover:bg-finance-blue/10"
            >
              {showFunctionalities ? "Hide Features" : "Explore Features"}
            </Button>
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-500" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">3</span>
            </div>
          </div>
        </div>
        
        {/* Features section (conditionally rendered) */}
        {showFunctionalities && (
          <div className="mb-8">
            <FunctionalityFeatures onFeatureClick={handleFeatureClick} />
          </div>
        )}
        
        {/* Card section */}
        <div className="mb-8">
          <CreditCard 
            number="4111111111111111"
            name="SARAH JOHNSON"
            expiry="09/26"
            type="visa"
          />
          
          {/* Card details */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Current Balance</p>
              <p className="text-xl font-bold text-finance-red">₹1,245.50</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Available Credit</p>
              <p className="text-xl font-bold text-finance-green">₹3,754.50</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Payment Due</p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-finance-blue">₹250.00</p>
                <p className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">15 Aug</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <QuickActions />
        
        {/* Spending overview and transactions */}
        <div className="grid md:grid-cols-2 gap-6">
          <SpendingChart data={spendingData} />
          <TransactionList transactions={transactions} />
        </div>
        
        {/* Feature details dialog */}
        <FeatureDetails 
          isOpen={showFeatureDetails} 
          onClose={() => setShowFeatureDetails(false)} 
          feature={selectedFeature}
        />
        
        {/* Bottom navigation (mobile) */}
        <MobileNavigation 
          goToRewards={goToRewards}
          goToRewardManagementDetail={goToRewardManagementDetail}
        />
      </div>
    </Slide>
  );
};

const MobileNavigation = ({ 
  goToRewards,
  goToRewardManagementDetail
}: { 
  goToRewards: () => void;
  goToRewardManagementDetail: () => void;
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
      <div className="flex justify-around">
        <NavItem icon={CreditCardIcon} label="Cards" active />
        <NavItem icon={FileText} label="Activity" />
        <NavItem 
          icon={PiggyBank} 
          label="Rewards" 
          onClick={goToRewards} 
          iconColor="text-purple-600" 
        />
        <NavItem icon={Send} label="Payments" />
      </div>
    </div>
  );
};

const NavItem = ({ 
  icon: Icon, 
  label, 
  active = false, 
  onClick, 
  iconColor = "text-gray-400" 
}: { 
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
  iconColor?: string;
}) => {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <Icon className={`h-6 w-6 ${active ? 'text-finance-blue' : iconColor}`} />
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
};

export default Dashboard;
