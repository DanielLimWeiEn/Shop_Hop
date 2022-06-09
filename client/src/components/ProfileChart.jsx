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

const ProfileChart = (props) => {
  const pastNMonths = (purchases, n) => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - n);
    const purchasesWithinPastNMonths = purchases?.filter((purchase) => {
      return purchase.purchaseDate > currentDate.toISOString();
    });

    return purchasesWithinPastNMonths;
  };

  const pastNDays = (purchases, n) => {
    const currentDate = new Date();
    const nDaysAgo = new Date(currentDate.getTime() - n * 24 * 60 * 60 * 1000);
    const purchasesWithinPastNDays = purchases?.filter((purchase) => {
      return purchase.purchaseDate > nDaysAgo.toISOString();
    });

    return purchasesWithinPastNDays;
  };

  const formatDataForDisplay = (purchases) => {
    const dataForDisplay = [
      {
        name: "Past Week",
        "Total Spending": 0,
      },
      {
        name: "Past Month",
        "Total Spending": 0,
      },
      {
        name: "Past Half",
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

    dataForDisplay[0]["Total Spending"] = pastNDays(purchases, 7)?.reduce(
      (accumulator, purchase) => {
        return accumulator + parseFloat(purchase.price.split("$")[1]);
      },
      0
    );

    dataForDisplay[1]["Total Spending"] = pastNMonths(purchases, 1)?.reduce(
      (accumulator, purchase) => {
        return accumulator + parseFloat(purchase.price.split("$")[1]);
      },
      0
    );

    dataForDisplay[2]["Total Spending"] = pastNMonths(purchases, 6)?.reduce(
      (accumulator, purchase) => {
        return accumulator + parseFloat(purchase.price.split("$")[1]);
      },
      0
    );

    dataForDisplay[3]["Total Spending"] = pastNMonths(purchases, 12)?.reduce(
      (accumulator, purchase) => {
        return accumulator + parseFloat(purchase.price.split("$")[1]);
      },
      0
    );

    dataForDisplay[4]["Total Spending"] = purchases?.reduce(
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
