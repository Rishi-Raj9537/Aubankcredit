
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BadgeIndianRupee, 
  ArrowLeft,
  Gift, 
  ChevronRight, 
  Clock, 
  Banknote, 
  Tag,
  Coins,
  BarChart4
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const offers = [
  {
    id: 1,
    merchant: 'Flipkart',
    description: 'Earn 5x rewards on all purchases',
    expiry: '25 Dec 2023',
    type: 'online'
  },
  {
    id: 2,
    merchant: 'Swiggy',
    description: 'Earn 3x rewards on food delivery',
    expiry: '31 Dec 2023',
    type: 'food'
  },
  {
    id: 3,
    merchant: 'Reliance Digital',
    description: '10% cashback on electronics',
    expiry: '15 Jan 2024',
    type: 'retail'
  },
  {
    id: 4,
    merchant: 'BookMyShow',
    description: 'Buy 1 Get 1 on movie tickets',
    expiry: '31 Dec 2023',
    type: 'entertainment'
  }
];

const redeemOptions = [
  { id: 1, name: 'Amazon Gift Card', points: 5000, value: '₹500' },
  { id: 2, name: 'Flight Booking', points: 10000, value: '₹1,000' },
  { id: 3, name: 'Cash to Bank', points: 7500, value: '₹750' }
];

const Rewards = () => {
  const navigate = useNavigate();
  
  const handleViewRewardDetails = (merchant = '') => {
    navigate('/reward-management-detail', { state: { merchant } });
  };
  
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            className="mr-4 p-2"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-finance-darkblue">Rewards & Benefits</h1>
        </div>
        
        {/* Rewards Summary */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-purple-600 to-purple-800 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <Coins className="mr-2 h-6 w-6" />
                Rewards Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold">25,460</span>
                <span className="ml-2 text-white/80">points</span>
              </div>
              <div className="flex items-center">
                <BadgeIndianRupee className="h-5 w-5 mr-1" />
                <span className="text-lg">₹2,546 value</span>
              </div>
              
              <div className="mt-6 space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Points expiring soon</span>
                  <span>2,000 points</span>
                </div>
                <Progress value={20} className="h-2 bg-white/20" />
                <p className="text-xs text-white/80">Expiring on 31 Dec 2023</p>
              </div>

              <Button 
                onClick={() => handleViewRewardDetails()}
                className="w-full mt-4 bg-white/20 hover:bg-white/30 flex items-center justify-center"
              >
                <BarChart4 className="h-4 w-4 mr-2" />
                View Detailed Analysis
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <Gift className="mr-2 h-6 w-6 text-purple-600" />
                Monthly Rewards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Rewards Earned This Month</span>
                    <span className="text-sm font-medium text-green-600">+1,245 points</span>
                  </div>
                  <Progress value={60} className="h-2 bg-gray-100" />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">Target: 2,000 points</span>
                    <span className="text-xs text-gray-500">60% achieved</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Bonus Milestone</span>
                    <span className="text-sm font-medium">5,000 points</span>
                  </div>
                  <Progress value={30} className="h-2 bg-gray-100" />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">Spend ₹15,000 more this month</span>
                    <span className="text-xs text-gray-500">30% achieved</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Redeem Rewards */}
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <Banknote className="mr-2 h-6 w-6 text-purple-600" />
              Redeem Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {redeemOptions.map(option => (
                <div key={option.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="font-medium">{option.name}</p>
                    <p className="text-sm text-gray-600">{option.points} points = {option.value}</p>
                  </div>
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Redeem
                  </Button>
                </div>
              ))}
              
              <Button variant="ghost" className="w-full flex items-center justify-center text-purple-600">
                View All Redemption Options
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Special Offers */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <Tag className="mr-2 h-6 w-6 text-purple-600" />
              Special Offers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {offers.map(offer => (
                <div 
                  key={offer.id}
                  className="flex items-start justify-between p-4 border rounded-lg hover:border-purple-200 transition-colors cursor-pointer"
                  onClick={() => handleViewRewardDetails(offer.merchant)}
                >
                  <div className="flex">
                    <div className="bg-purple-100 rounded-full p-3 mr-3">
                      <Gift className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">{offer.merchant}</h3>
                        <Badge variant="outline" className="ml-2 text-xs bg-purple-50 text-purple-700 border-purple-200">
                          {offer.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>Expires: {offer.expiry}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-purple-600">
                    View
                  </Button>
                </div>
              ))}
              
              <Button variant="ghost" className="w-full flex items-center justify-center text-purple-600">
                View All Offers
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rewards;
