//import React Native components
import { Text, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width - 16;

//import React Native chart Kit for different kind of Chart
import { LineChart } from "react-native-chart-kit";

//import styles definitions
import styles from "../../../style";

export default (props) => {
  dados_mockados = require("../../../services/dados.json");
  dadosDaEmissaoDiaria = dados_mockados.emissao_diaria;

  let chartData = {};
  let legenda;

  dadosDaEmissaoDiaria.map((item) => {
    legenda = item.sensorId;
    chartData = item.readings.map((reading) => {
      const timestamp = new Date(reading.timestamp);
      const hour = timestamp.getHours();

      const co2Level = reading.co2Level;

      return { x: hour, y: co2Level };
    });
  });

  const dataX = chartData.map((dado) => {
    return dado.x;
  });

  const dataY = chartData.map((dado) => {
    return dado.y;
  });

  const data = {
    labels: dataX,
    datasets: [
      {
        data: dataY,
        color: (opacity = 1) => `rgba(0, 70, 133, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: [legenda], // optional
  };

  return (
    <>
      {/* Título da o componente */}
      <Text style={styles.title}>Emissão Diária</Text>
      {/* Gráfico de Emissão diária */}
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: () => `rgba(0, 0, 0, 0.4)`,
          style: {
            borderRadius: 5,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 5,
        }}
      />
      {/* Gráfico de Emissão diária */}
    </>
  );
};
