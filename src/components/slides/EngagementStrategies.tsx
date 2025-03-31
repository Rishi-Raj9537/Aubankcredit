
import React from 'react';
import Slide from '@/components/Slide';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  Gift, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  HomeIcon, 
  PiggyBank 
} from 'lucide-react';

const EngagementStrategies: React.FC = () => {
  return (
    <Slide title="Increasing User Engagement">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-finance-blue mb-4">Engagement Strategies</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-finance-blue pl-4 py-2">
              <h3 className="font-semibold text-lg">Personalized Insights & Notifications</h3>
              <p className="text-gray-600 mt-1">Send timely alerts about unusual spending, payment reminders, and achievement of spending goals.</p>
              <div className="bg-blue-50 rounded-lg p-3 mt-2">
                <div className="flex items-start space-x-3">
                  <div className="bg-finance-blue rounded-full p-1 mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Smart Notification Example:</p>
                    <p className="text-sm">"We noticed you spend 30% more on dining this month. Would you like to set a budget alert?"</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-finance-green pl-4 py-2">
              <h3 className="font-semibold text-lg">Gamified Rewards Program</h3>
              <p className="text-gray-600 mt-1">Implement points, progress bars, badges and challenges to make using the card more engaging and rewarding.</p>
              <div className="bg-green-50 rounded-lg p-3 mt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Weekend Shopping Challenge</span>
                  <span className="text-sm text-finance-green">5,000 points</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-finance-green h-2.5 rounded-full w-[65%]"></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">$325/$500 spent on weekend shopping</p>
              </div>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-semibold text-lg">Financial Wellness Tools</h3>
              <p className="text-gray-600 mt-1">Provide budget planning, debt-reduction strategies, and credit score improvement tips.</p>
              <div className="bg-purple-50 rounded-lg p-3 mt-2">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-500 rounded-full p-1 mt-1">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Credit Score Insight:</p>
                    <p className="text-sm">"Your credit utilization is 40%. Reducing it below 30% could improve your score by ~20 points."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-finance-blue mb-4">Revenue Generation Opportunities</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-finance-lightblue flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Premium Protection Services</h3>
                  <p className="text-gray-600 mt-1">Offer subscription-based enhanced fraud protection, purchase insurance, and identity theft monitoring.</p>
                  <div className="mt-2">
                    <Button variant="outline" className="text-finance-blue border-finance-blue hover:bg-finance-blue hover:text-white">
                      Upgrade to Premium
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-finance-green flex items-center justify-center flex-shrink-0">
                  <Gift className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Personalized Merchant Offers</h3>
                  <p className="text-gray-600 mt-1">Partner with merchants to provide tailored offers based on spending habits, collecting referral fees.</p>
                  <div className="mt-2 bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="Amazon" className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-medium">Amazon</p>
                          <p className="text-xs text-gray-500">5% cashback on your next purchase</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-finance-blue">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-finance-blue to-finance-lightblue rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Financial Product Cross-Selling</h3>
            <p className="text-white/90 mb-4">Leverage card usage data to recommend relevant financial products that meet user needs.</p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <h4 className="font-semibold">Based on your spending profile:</h4>
              <ul className="mt-2 space-y-3">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <HomeIcon className="h-4 w-4 text-white" />
                  </div>
                  <span>Home Equity Line of Credit</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <PiggyBank className="h-4 w-4 text-white" />
                  </div>
                  <span>High-Yield Savings Account</span>
                </li>
              </ul>
              <Button className="mt-4 bg-white text-finance-blue hover:bg-white/90 w-full">
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default EngagementStrategies;
