'use client';

import dynamic from 'next/dynamic';
import { ChartData, ChartOptions } from 'chart.js';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components for BarChart
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dynamically import BarChart with SSR disabled
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), { ssr: false });

interface BarChartProps {
  data: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

export default function BarChart({ data, options }: BarChartProps) {
  return (
    <div className="h-64">
      <Bar data={data} options={options ?? { maintainAspectRatio: false }} />
    </div>
  );
}