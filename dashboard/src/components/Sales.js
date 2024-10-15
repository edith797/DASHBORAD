import React from "react";
import './sales.css';

const Sales = () => {
  return (
    <div className="sales-container">
      <div className="section-title">Sales Overview</div>
      
      <div className="stats">
        <div className="stat-card">
          <p>Total Revenue</p>
          <h3>₹1,234,567</h3>
        </div>
        <div className="stat-card">
          <p>Sales Growth</p>
          <h3>12.3%</h3>
        </div>
        <div className="stat-card">
          <p>Orders Processed</p>
          <h3>1,230</h3>
        </div>
        <div className="stat-card">
          <p>Products Sold</p>
          <h3>3,456</h3>
        </div>
      </div>

      <div className="order-list">
        <div className="order-list-header">
          <div className="section-title">Recent Orders</div>
          <button className="filter-btn">Filter Orders</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Product(s)</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#12345</td>
              <td>Athish</td>
              <td>Wireless Earbuds</td>
              <td>2024-09-01</td>
              <td>₹59.99</td>
              <td>Shipped</td>
            </tr>
            <tr>
              <td>#12346</td>
              <td>Sanjay</td>
              <td>Leather Wallet</td>
              <td>2024-09-02</td>
              <td>₹39.99</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>#12347</td>
              <td>Mathi</td>
              <td>Smart Watch</td>
              <td>2024-09-03</td>
              <td>₹199.99</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
