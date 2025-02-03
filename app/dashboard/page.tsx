import BarChart from '@/components/BarChart';
import LineChart from '@/components/LineChart';
import DoughnutChart from '@/components/DoughnutChart';

const Dashboard = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Income',
        data: [4000, 4500, 5000, 4800, 5200, 5800, 6100, 5900, 6200, 7000, 6800, 7100],
        backgroundColor: '#4CAF50',
      },
      {
        label: 'Total Expenses',
        data: [3000, 3200, 3500, 3400, 3600, 4000, 4200, 4100, 4300, 4800, 4700, 4900],
        backgroundColor: '#F44336',
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Cash at End of Month',
        data: [1000, 1300, 1500, 1600, 2000, 1800, 1900, 1800, 1900, 2200, 2100, 2300],
        borderColor: '#FF9800',
        backgroundColor: 'rgba(255, 152, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const doughnutData = {
    labels: ['Income Budget', 'Expenses Budget'],
    datasets: [
      {
        data: [94, 93],
        backgroundColor: ['#4CAF50', '#F44336'],
      },
    ],
  };

  return (
    <div className="flex flex-col p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Financial Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2>Total Income</h2>
          <p>4,719.00</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2>Total Expenses</h2>
          <p>3,270.00</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2>Net Profit</h2>
          <p>629.00</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Income and Expenses</h3>
          <BarChart data={barData} />
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Cash at End of Month</h3>
          <LineChart data={lineData} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">% of Income Budget</h3>
          <DoughnutChart data={doughnutData} />
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">% of Expenses Budget</h3>
          <DoughnutChart data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
