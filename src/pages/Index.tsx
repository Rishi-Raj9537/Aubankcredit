
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slide from '@/components/Slide';
import SlideNavigation from '@/components/SlideNavigation';
import CreditCard from '@/components/CreditCard';
import SpendingChart from '@/components/SpendingChart';
import TransactionList from '@/components/TransactionList';
import FeatureCard from '@/components/FeatureCard';
import { 
  Bell, 
  CreditCard as CreditCardIcon, 
  DollarSign, 
  ChevronRight, 
  LockKeyhole, 
  Receipt,
  ArrowLeftRight,
  FileText,
  PiggyBank,
  Gift,
  ShieldCheck,
  TrendingUp,
  Zap,
  Send,
  Home as HomeIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const spendingData = [
  { name: 'Shopping', value: 35, color: '#3B82F6' },
  { name: 'Food', value: 25, color: '#10B981' },
  { name: 'Travel', value: 15, color: '#6366F1' },
  { name: 'Bills', value: 20, color: '#F43F5E' },
  { name: 'Other', value: 5, color: '#6B7280' },
];

const transactions = [
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

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  const navigate = useNavigate();

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToRewards = () => {
    navigate('/rewards');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {currentSlide === 0 && (
        <Slide title="Credit Card Management Dashboard">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-finance-blue mb-4">Key Functionalities</h2>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Primary Functionalities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-finance-blue flex items-center justify-center text-white font-medium mr-2">1</span>
                    <div>
                      <span className="font-medium">Balance & Payment Management</span>
                      <p className="text-sm text-gray-600">View balance, available credit, due dates, and make payments</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-finance-blue flex items-center justify-center text-white font-medium mr-2">2</span>
                    <div>
                      <span className="font-medium">Transaction Monitoring</span>
                      <p className="text-sm text-gray-600">View recent transactions, search history, and filter by category</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-finance-blue flex items-center justify-center text-white font-medium mr-2">3</span>
                    <div>
                      <span className="font-medium">Security Controls</span>
                      <p className="text-sm text-gray-600">Freeze card, report lost/stolen, change PIN, manage limits</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Secondary Functionalities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-finance-lightblue flex items-center justify-center text-white font-medium mr-2">1</span>
                    <div>
                      <span className="font-medium">Rewards Management</span>
                      <p className="text-sm text-gray-600">Track points/cashback, redeem rewards, view offers</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-finance-lightblue flex items-center justify-center text-white font-medium mr-2">2</span>
                    <div>
                      <span className="font-medium">Spending Analysis</span>
                      <p className="text-sm text-gray-600">View spending patterns, category breakdown, monthly trends</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-finance-lightblue flex items-center justify-center text-white font-medium mr-2">3</span>
                    <div>
                      <span className="font-medium">Card Settings & Preferences</span>
                      <p className="text-sm text-gray-600">Manage autopay, notifications, statement preferences</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-finance-lightblue flex items-center justify-center text-white font-medium mr-2">4</span>
                    <div>
                      <span className="font-medium">Support & Services</span>
                      <p className="text-sm text-gray-600">Dispute transactions, chat with support, access statements</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center">
              <img 
                src="https://img.freepik.com/free-vector/gradient-mobile-banking-concept_23-2149199179.jpg" 
                alt="Credit Card Management Illustration" 
                className="max-w-full h-auto rounded-xl shadow-lg mb-6"
              />
              <p className="text-center text-gray-600 italic">"A well-designed credit card management interface enables users to track finances, secure transactions, and maximize card benefits with ease."</p>
            </div>
          </div>
        </Slide>
      )}

      {currentSlide === 1 && (
        <Slide title="Dashboard Wireframe - Main View">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
            {/* Header with notifications */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">My Credit Card</h2>
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-500" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">3</span>
              </div>
            </div>
            
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
            
            {/* Spending overview and transactions */}
            <div className="grid md:grid-cols-2 gap-6">
              <SpendingChart data={spendingData} />
              <TransactionList transactions={transactions} />
            </div>
            
            {/* Bottom navigation (mobile) */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
              <div className="flex justify-around">
                <div className="flex flex-col items-center">
                  <CreditCardIcon className="h-6 w-6 text-finance-blue" />
                  <span className="text-xs mt-1">Cards</span>
                </div>
                <div className="flex flex-col items-center">
                  <FileText className="h-6 w-6 text-gray-400" />
                  <span className="text-xs mt-1">Activity</span>
                </div>
                <div className="flex flex-col items-center" onClick={goToRewards}>
                  <PiggyBank className="h-6 w-6 text-purple-600" />
                  <span className="text-xs mt-1">Rewards</span>
                </div>
                <div className="flex flex-col items-center">
                  <Send className="h-6 w-6 text-gray-400" />
                  <span className="text-xs mt-1">Payments</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      )}

      {currentSlide === 2 && (
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
      )}

      {currentSlide === 3 && (
        <Slide title="Summary & Key Insights">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-finance-blue mb-4">Key Takeaways</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-finance-blue/5 p-5 rounded-lg border-l-4 border-finance-blue">
                    <h3 className="font-semibold text-finance-blue">Comprehensive Management</h3>
                    <p className="mt-2 text-gray-700">A well-designed credit card dashboard must balance primary functions (payments, security, transactions) with secondary features (rewards, analytics, preferences).</p>
                  </div>
                  
                  <div className="bg-finance-green/5 p-5 rounded-lg border-l-4 border-finance-green">
                    <h3 className="font-semibold text-finance-green">Engagement Drives Usage</h3>
                    <p className="mt-2 text-gray-700">Personalized insights, gamification, and financial wellness tools significantly increase app engagement and card usage frequency.</p>
                  </div>
                  
                  <div className="bg-purple-500/5 p-5 rounded-lg border-l-4 border-purple-500">
                    <h3 className="font-semibold text-purple-500">Revenue Opportunities</h3>
                    <p className="mt-2 text-gray-700">Enhanced engagement creates multiple revenue streams through premium services, partner offers, and cross-selling of financial products.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-finance-blue mb-4">Implementation Roadmap</h2>
                <div className="relative">
                  {/* Timeline */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  {/* Phase 1 */}
                  <div className="mb-6 relative">
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-finance-blue flex items-center justify-center text-white font-bold">
                      Q1
                    </div>
                    <div className="ml-24">
                      <h3 className="text-xl font-semibold">Core Functionality</h3>
                      <p className="text-gray-600 mt-1">Implement primary functionalities, focusing on balance management, transaction monitoring, and security controls.</p>
                    </div>
                  </div>
                  
                  {/* Phase 2 */}
                  <div className="mb-6 relative">
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-finance-lightblue flex items-center justify-center text-white font-bold">
                      Q2
                    </div>
                    <div className="ml-24">
                      <h3 className="text-xl font-semibold">Engagement Features</h3>
                      <p className="text-gray-600 mt-1">Launch personalized insights, spending analytics, and basic gamified rewards features to boost engagement.</p>
                    </div>
                  </div>
                  
                  {/* Phase 3 */}
                  <div className="relative">
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-finance-green flex items-center justify-center text-white font-bold">
                      Q3
                    </div>
                    <div className="ml-24">
                      <h3 className="text-xl font-semibold">Revenue Generation</h3>
                      <p className="text-gray-600 mt-1">Introduce premium services, merchant partnerships, and financial product recommendations.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <p className="text-center text-gray-600 italic">
                  "A successful credit card management module creates a virtuous cycle: better user experience leads to increased engagement, which provides more data for personalization, which enhances both user satisfaction and revenue opportunities."
                </p>
              </div>
            </div>
          </div>
        </Slide>
      )}

      <SlideNavigation 
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={goToPrevSlide}
        onNext={goToNextSlide}
      />
    </div>
  );
};

export default Index;
