import DashboardCharts from "./DashboardCharts";

const data = [
  { title: "Total Sales", value: "$250,000" },
  { title: "Number of Orders", value: "1,200" },
  { title: "New Customers", value: "300" },
  { title: "Revenue", value: "$500,000" },
];

const DashboardPage = async () => {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-bold my-4">Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item.title} className="shadow-lg rounded-lg p-4">
            <h4 className="text-xl font-semibold">{item.title}</h4>
            <p className="text-2xl">{item.value}</p>
          </div>
        ))}
      </div>
      <DashboardCharts />
    </div>
  );
};

export default DashboardPage;
