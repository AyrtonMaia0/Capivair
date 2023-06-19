import React from "react";
//import React Native components
import { Text, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width - 16;

//import React Native chart Kit for different kind of Chart
import { LineChart } from "react-native-chart-kit";

//import styles definitions
import styles from "../../../style";

export default (props) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [50, 30, 70, 45, 60, 80],
        color: (opacity = 1) => `rgba(244, 65, 134, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Rainy Days", "Sunny Days"],
  };

  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={{
        color: (opacity = 1) => `rgba(250, 235, 215, ${opacity})`,
        style: {
          borderRadius: 5,
        },
      }}
    />
  );
};