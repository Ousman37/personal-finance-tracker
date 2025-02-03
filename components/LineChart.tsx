'use client';

import dynamic from 'next/dynamic';
import { ChartData, ChartOptions } from 'chart.js';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components for LineChart
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Dynamically import LineChart with SSR disabled
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), { ssr: false });

interface LineChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
}

export default function LineChart({ data, options }: LineChartProps) {
  return (
    <div className="h-64">
      <Line data={data} options={options ?? { maintainAspectRatio: false }} />
    </div>
  );
}
