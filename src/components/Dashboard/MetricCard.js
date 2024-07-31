import React from 'react';

function MetricCard({ title, value, unit }) {
  return (
    <div className="metric-card">
      <h3>{title}</h3>
      <p>{value} {unit}</p>
    </div>
  );
}

export default MetricCard;