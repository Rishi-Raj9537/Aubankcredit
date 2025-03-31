
import React from 'react';
import Slide from '@/components/Slide';

const Summary: React.FC = () => {
  return (
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
  );
};

export default Summary;
