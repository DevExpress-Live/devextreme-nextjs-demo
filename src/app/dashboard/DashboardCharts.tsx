"use client";
import {
  Chart,
  Series,
  Title,
  Legend,
  Tooltip,
  Export,
} from "devextreme-react/chart";
import {
  PieChart,
  Series as PieSeries,
  Label,
  Connector,
} from "devextreme-react/pie-chart";

const salesData = [
  { month: "January", sales: 40000 },
  { month: "February", sales: 35000 },
  { month: "March", sales: 50000 },
  { month: "April", sales: 60000 },
  { month: "May", sales: 70000 },
];

const revenueData = [
  { category: "Electronics", revenue: 300000 },
  { category: "Clothing", revenue: 150000 },
  { category: "Home Appliances", revenue: 100000 },
  { category: "Books", revenue: 50000 },
];

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
      <div className="col-span-2 shadow-lg rounded-lg p-4">
        <Chart dataSource={salesData} title="Sales Trends">
          <Series
            valueField="sales"
            argumentField="month"
            type="line"
            color="#ffaa66"
          />
          <Title text="Sales Trends" />
          <Legend verticalAlignment="bottom" horizontalAlignment="center" />
          <Tooltip enabled={true} />
          <Export enabled={true} />
        </Chart>
      </div>
      <div className="shadow-lg rounded-lg p-4">
        <PieChart dataSource={revenueData} title="Revenue Breakdown">
          <PieSeries argumentField="category" valueField="revenue">
            <Label visible={true}>
              <Connector visible={true} />
            </Label>
          </PieSeries>
          <Export enabled={true} />
        </PieChart>
      </div>
    </div>
  );
};

export default DashboardCharts;
