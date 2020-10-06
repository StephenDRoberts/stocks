import React from "react";
import { Line } from "react-chartjs-2";

import "./Chart.scss";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "EPS",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [5, 4, 3, 2, 1],
      yAxisID: "y-axis-1",
    },
    {
      label: "Price",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(192,75,81,0.4)",
      borderColor: "rgba(192,75,81,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(192,75,81,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(192,75,81,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1, 2, 3, 4, 5],
      yAxisID: "y-axis-2",
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        // type: 'time',
        ticks: {
          autoSkip: true,
          min: "January",
          interval: 1,
          // maxTicksLimit: 9.5
        },
      },
    ],
    yAxes: [
      {
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "left",
        id: "y-axis-1",
      },
      {
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "right",
        id: "y-axis-2",
        // grid line settings
        gridLines: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    ],
  },
};

interface ChartProps {
  icon?: JSX.Element;
  footer?: JSX.Element;
  className?: string;
}
const Chart: React.FC<ChartProps> = ({ icon, footer, children }) => {
  return (
    <div className="chart">
      <Line data={data} options={options} width={3} height={1} />
    </div>
  );
};

export default Chart;
