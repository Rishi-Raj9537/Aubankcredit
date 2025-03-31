
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Calculator, 
  TrendingUp,
  Coins,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

// Mock merchant data
const merchantTransactions = [
  { id: 1, merchant: 'Amazon', date: '12 Aug 2023', amount: 1200, points: 120, multiplier: 1, category: 'shopping' },
  { id: 2, merchant: 'Amazon', date: '25 Jul 2023', amount: 3500, points: 350, multiplier: 1, category: 'shopping' },
  { id: 3, merchant: 'Amazon', date: '10 Jun 2023', amount: 650, points: 65, multiplier: 1, category: 'shopping' },
  { id: 4, merchant: 'Flipkart', date: '15 Aug 2023', amount: 4200, points: 840, multiplier: 2, category: 'shopping' },
  { id: 5, merchant: 'Flipkart', date: '05 Jul 2023', amount: 1800, points: 360, multiplier: 2, category: 'shopping' },
  { id: 6, merchant: 'Swiggy', date: '28 Aug 2023', amount: 850, points: 255, multiplier: 3, category: 'food' },
  { id: 7, merchant: 'Swiggy', date: '14 Aug 2023', amount: 920, points: 276, multiplier: 3, category: 'food' },
  { id: 8, merchant: 'Swiggy', date: '01 Aug 2023', amount: 560, points: 168, multiplier: 3, category: 'food' },
  { id: 9, merchant: 'BookMyShow', date: '20 Aug 2023', amount: 1200, points: 120, multiplier: 1, category: 'entertainment' },
  { id: 10, merchant: 'Reliance Digital', date: '10 Aug 2023', amount: 15000, points: 1500, multiplier: 1, category: 'retail' },
];

interface MerchantSummary {
  merchant: string;
  totalSpent: number;
  totalPoints: number;
  averageMultiplier: number;
  transactionCount: number;
  category: string;
}

const RewardManagementDetail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCalculator, setShowCalculator] = useState(false);
  const [amount, setAmount] = useState<string>('1000');
  const [multiplier, setMultiplier] = useState<string>('1');
  const [calculatedPoints, setCalculatedPoints] = useState<number>(0);
  
  // Get merchant from location state or default to showing all
  const focusMerchant = location.state?.merchant || '';
  
  // Filter transactions if merchant is specified
  const filteredTransactions = focusMerchant 
    ? merchantTransactions.filter(t => t.merchant === focusMerchant)
    : merchantTransactions;
  
  // Calculate merchant summaries
  const merchantSummaries: MerchantSummary[] = Object.values(
    filteredTransactions.reduce((acc: Record<string, MerchantSummary>, transaction) => {
      const { merchant, amount, points, multiplier, category } = transaction;
      
      if (!acc[merchant]) {
        acc[merchant] = {
          merchant,
          totalSpent: 0,
          totalPoints: 0,
          averageMultiplier: 0,
          transactionCount: 0,
          category
        };
      }
      
      acc[merchant].totalSpent += amount;
      acc[merchant].totalPoints += points;
      acc[merchant].transactionCount += 1;
      acc[merchant].averageMultiplier = acc[merchant].totalPoints / acc[merchant].totalSpent * 10; // Points per ₹10 spent
      
      return acc;
    }, {})
  ).sort((a, b) => b.totalPoints - a.totalPoints);
  
  // Total points and spend across all filtered transactions
  const totalPoints = filteredTransactions.reduce((sum, t) => sum + t.points, 0);
  const totalSpent = filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
  
  // Calculate points based on input
  const calculatePoints = () => {
    const pointsEarned = Math.floor(parseFloat(amount) * parseFloat(multiplier) / 10);
    setCalculatedPoints(pointsEarned);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            className="mr-4 p-2"
            onClick={() => navigate('/rewards')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-finance-darkblue">
            {focusMerchant ? `${focusMerchant} Rewards Analysis` : 'Merchant Rewards Analysis'}
          </h1>
        </div>
        
        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5 text-purple-600" />
                Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{filteredTransactions.length}</div>
              <p className="text-sm text-gray-500">Total transactions</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Coins className="mr-2 h-5 w-5 text-purple-600" />
                Points Earned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalPoints}</div>
              <p className="text-sm text-gray-500">Worth ₹{(totalPoints / 10).toFixed(2)}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-purple-600" />
                Average Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{(totalPoints / totalSpent * 10).toFixed(1)}x</div>
              <p className="text-sm text-gray-500">Points per ₹10 spent</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Points Calculator */}
        <Card className="mb-8">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <Calculator className="mr-2 h-5 w-5 text-purple-600" />
              Rewards Calculator
            </CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowCalculator(!showCalculator)}
            >
              {showCalculator ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CardHeader>
          
          {showCalculator && (
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transaction Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    min="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reward Multiplier
                  </label>
                  <select
                    value={multiplier}
                    onChange={(e) => setMultiplier(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="1">1x (Standard)</option>
                    <option value="2">2x (Special Offer)</option>
                    <option value="3">3x (Premium Reward)</option>
                    <option value="5">5x (Festival Offer)</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <Button 
                    onClick={calculatePoints}
                    className="bg-purple-600 hover:bg-purple-700 w-full"
                  >
                    Calculate
                  </Button>
                </div>
              </div>
              
              {calculatedPoints > 0 && (
                <div className="bg-purple-50 p-4 rounded-md border border-purple-100">
                  <div className="text-xl font-bold text-purple-800">
                    You'll earn {calculatedPoints} points!
                  </div>
                  <p className="text-sm text-purple-600">
                    Worth approximately ₹{(calculatedPoints / 10).toFixed(2)} in rewards value
                  </p>
                </div>
              )}
            </CardContent>
          )}
        </Card>
        
        {/* Merchant Performance Table */}
        {merchantSummaries.length > 0 && (
          <Card className="mb-8">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                {merchantSummaries.length > 1 ? 'Merchant Performance' : 'Merchant Details'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Merchant</TableHead>
                    <TableHead>Transactions</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Points Earned</TableHead>
                    <TableHead>Avg. Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {merchantSummaries.map((summary) => (
                    <TableRow key={summary.merchant} className="cursor-pointer hover:bg-gray-50"
                      onClick={() => {
                        if (merchantSummaries.length > 1) {
                          navigate('/reward-management-detail', { state: { merchant: summary.merchant } });
                        }
                      }}
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          {summary.merchant}
                          {merchantSummaries.length > 1 && 
                            <ExternalLink className="h-3 w-3 ml-1 text-gray-400" />
                          }
                        </div>
                      </TableCell>
                      <TableCell>{summary.transactionCount}</TableCell>
                      <TableCell>₹{summary.totalSpent.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="font-semibold text-purple-700">
                          {summary.totalPoints.toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`
                          ${summary.averageMultiplier >= 2 ? 'bg-green-50 text-green-700 border-green-200' : 
                            summary.averageMultiplier >= 1 ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                            'bg-gray-50 text-gray-700 border-gray-200'}
                        `}>
                          {summary.averageMultiplier.toFixed(1)}x
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
        
        {/* Transaction History */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Merchant</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Multiplier</TableHead>
                  <TableHead>Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell className="font-medium">{transaction.merchant}</TableCell>
                    <TableCell>₹{transaction.amount.toLocaleString()}</TableCell>
                    <TableCell>{transaction.multiplier}x</TableCell>
                    <TableCell className="font-semibold text-purple-700">
                      {transaction.points}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RewardManagementDetail;
