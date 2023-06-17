//import React Native components
import React, { useState, useEffect } from "react";
import { Text, Dimensions } from "react-native";

//import React Native chart Kit for different kind of Chart
import { BarChart } from "react-native-chart-kit";

//import styles definitions
import styles from "../../../style";

export default (props) => {
  const [chart, setChart] = useState([]);

  var baseUrl = "https://api.coinranking.com/v2/coins?limit=10";
  var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  var apiKey = "coinranking3c73e1bcf35b5b51b281813d04edd84118ddf620639931d2";

  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${proxyUrl}${baseUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${apiKey}`,
          "Access-Control-Allow-Origin": "*",
        },
      }).then((reponse) => {
        Response.json()
          .then((json) => {
            console.log(json);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    };
    fetchCoins();
  }, []);

  return (
    <>
      <Text style={styles.title}>Bar Chart</Text>
      <BarChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        yAxisLabel={"$"}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

/* 
  );
};
 */
