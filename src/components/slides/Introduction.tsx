
import React from 'react';
import Slide from '@/components/Slide';

const Introduction = () => {
  return (
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
  );
};

export default Introduction;
