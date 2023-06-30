import React from 'react';

const PieChart = () => {
  const chartData = [
    { label: 'Team Allocation (15%)', percentage: 15, color: 'text-gray-300' },
    { label: 'Advisor and Community Whitelisting (10%)', percentage: 10, color: 'text-blue-500' },
    { label: 'Public Sale (35%)', percentage: 35, color: 'text-green-500' },
    { label: 'Staking Rewards (35%)', percentage: 35, color: 'text-yellow-500' },
    { label: 'Exchange and Partnership (5%)', percentage: 5, color: 'text-purple-500' },
  ];

  const calculateStrokeDasharray = (percentage) => {
    const circumference = 2 * Math.PI * 18;
    const dashLength = (percentage / 100) * circumference;
    return `${dashLength} ${circumference - dashLength}`;
  };

  const calculateStrokeDashoffset = (index, data) => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += (data[i].percentage / 100) * 2 * Math.PI * 18;
    }
    return offset;
  };

  return (
    <div className="flex items-center justify-center">
      <svg className="w-64 h-64">
        {chartData.map((data, index) => (
          <path
            key={index}
            className={data.color}
            d="M18 0 a 18 18 0 0 1 0 36 a 18 18 0 0 1 0 -36"
            strokeDasharray={calculateStrokeDasharray(data.percentage)}
            strokeDashoffset={calculateStrokeDashoffset(index, chartData)}
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
        {chartData.map((data, index) => (
          <div key={index} className={data.color}>
            {data.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
