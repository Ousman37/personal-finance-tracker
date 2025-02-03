'use client';

import dynamic from 'next/dynamic';
import { ChartData, ChartOptions } from 'chart.js';
import { Chart, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components for DoughnutChart
Chart.register(ArcElement, Title, Tooltip, Legend);

// Dynamically import DoughnutChart with SSR disabled
const Doughnut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), { ssr: false });

interface DoughnutChartProps {
  data: ChartData<'doughnut'>;
  options?: ChartOptions<'doughnut'>;
}

export default function DoughnutChart({ data, options }: DoughnutChartProps) {
  return (
    <div className="h-64">
      <Doughnut data={data} options={options ?? { maintainAspectRatio: false }} />
    </div>
  );
}