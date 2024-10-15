// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';
import { Line } from 'react-chartjs-2';
import '../chartConfig'; // Ensure this path is correct

const Dashboard = () => {
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales Overview',
      data: [4000, 5000, 6000, 7000, 8000, 9000],
      borderColor: '#6c5ce7',
      backgroundColor: 'rgba(108, 92, 231, 0.1)',
      fill: true
    }]
  };

  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card">Total Sales: ₹12,345</div>
        <div className="card">New Users: 1,234</div>
        <div className="card">Total Products: 567</div>
 
      </div>
      <div className="charts">
        <div className="chart">
          <h3>Sales Overview</h3>
          <Line data={lineChartData} />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
