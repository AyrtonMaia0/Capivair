//import React Native components
import { Text, Dimensions } from "react-native";

//import React Native chart Kit for different kind of Chart
import { BarChart } from "react-native-chart-kit";

//import styles definitions
import styles from "capivair/style";

// Importação e preparação dos dados
dados_mockados = require("capivair/services/dados.json");
emissao_total = dados_mockados.emissao_total.anual;
emissao_total = emissao_total.map((item) => {
  console.log(item.ano);
  return item.ano;
});

export default (props) => {
  return (
    <>
      <Text style={styles.title}>Emissão Total</Text>
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
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
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
