import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartContainer = styled.div`
  box-sizing: border-box;
  width: 95%;
  height: 85%;
`;
const data = [
  {
    name: "Page A",
    uv: 4000,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    amt: 2100,
  },
];

const ProfileChart = (props) => {
  const pastNMonths = (purchases, n) => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - n);
    const purchasesWithinPastNMonths = purchases?.filter((purchase) => {
      return purchase.purchaseDate > currentDate.toISOString();
    });

    return purchasesWithinPastNMonths;
  };

  const formatDataForDisplay = (purchases) => {
    const dataForDisplay = [
      {
        name: "Past Month",
        "Total Spending": 0,
      },
      {
        name: "Past 6 Months",
        "Total Spending": 0,
      },
      {
        name: "Past Year",
        "Total Spending": 0,
      },
      {
        name: "All time",
        "Total Spending": 0,
      },
    ];

    dataForDisplay[0]["Total Spending"] = pastNMonths(purchases, 1)?.reduce(
      (accumulator, purchase) => {
        return accumulator + parseFloat(purchase.price.split("$")[1]);
      },
      0
    );

    dataForDisplay[1]["Total Spending"] = pastNMonths(purchases, 6)?.reduce(
      (accumulator, purchase) => {
        return accumulator + parseFloat(purchase.price.split("$")[1]);
      },
      0
    );

    dataForDisplay[2]["Total Spending"] = pastNMonths(purchases, 12)?.reduce(
      (accumulator, purchase) => {
        return accumulator + parseFloat(purchase.price.split("$")[1]);
      },
      0
    );

    dataForDisplay[0]["Total Spending"] = purchases?.reduce(
      (accumulator, purchase) => {
        return accumulator + parseFloat(purchase.price.split("$")[1]);
      },
      0
    );

    return dataForDisplay;
  };

  return (
    <ChartContainer>
      <ResponsiveContainer>
        <BarChart
          data={formatDataForDisplay(props.purchases)}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Total Spending" fill="rgb(204, 179, 255)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ProfileChart;
