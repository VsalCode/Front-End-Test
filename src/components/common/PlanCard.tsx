import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PlanCardProps {
  type: string;
  title: string;
  description: string;
  period: string;
  rate: string;
  bgColor: string;
  textColor?: string;
  buttonBg?: string;
  buttonText?: string;
  buttonHover?: string;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  type,
  title,
  description,
  period,
  rate,
  bgColor,
  textColor = 'text-black',
  buttonBg = 'bg-black',
  buttonText = 'text-white',
  buttonHover = 'hover:bg-gray-800',
}) => {
  return (
    <div className={`${bgColor} rounded-3xl p-6 ${textColor} relative overflow-hidden hover:shadow-lg transition-shadow`}>
      <div className="text-sm font-medium mb-2 opacity-80">{type}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-sm mb-8 opacity-90">{description}</p>
      <div className="text-sm mb-2">{period}</div>
      <div className="text-4xl font-bold mb-4">{rate}</div>
      <button className={`absolute bottom-6 right-6 w-10 h-10 ${buttonBg} ${buttonHover} rounded-xl flex items-center justify-center transition-colors`}>
        <ArrowRight className={`h-4 w-4 ${buttonText}`} />
      </button>
    </div>
  );
};