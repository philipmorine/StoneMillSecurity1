import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const TipCard: React.FC<TipCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="bg-cyan-100 p-3 rounded-full">
              <Icon className="h-6 w-6 text-cyan-600" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="text-cyan-600 font-bold">#{index}</span>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCard;