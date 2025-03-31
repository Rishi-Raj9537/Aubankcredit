
import React, { useState } from 'react';
import SlideNavigation from '@/components/SlideNavigation';
import Introduction from '@/components/slides/Introduction';
import Dashboard from '@/components/slides/Dashboard';
import EngagementStrategies from '@/components/slides/EngagementStrategies';
import Summary from '@/components/slides/Summary';
import { spendingData, transactions } from '@/components/constants/mockData';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

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

  return (
    <div className="bg-gray-50 min-h-screen">
      {currentSlide === 0 && <Introduction />}
      {currentSlide === 1 && <Dashboard spendingData={spendingData} transactions={transactions} />}
      {currentSlide === 2 && <EngagementStrategies />}
      {currentSlide === 3 && <Summary />}

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
