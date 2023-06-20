//import React Native components
import { Text, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width - 16;

//import React Native chart Kit for different kind of Chart
import { LineChart } from "react-native-chart-kit";

//import styles definitions
import styles from "../../../style";


export default (props) => {
  dados_mockados = require("../../../services/dados.json");
  dadosDaEmissaoSemanal = dados_mockados.emissao_semanal;

  let chartData = {};

  dadosDaEmissaoSemanal.map((item) => {
    chartData = item.readings.map((reading) => {
      const timestamp = new Date(reading.timestamp);
      const day = timestamp.getDay();
      
      const co2Level = reading.co2Level;

      return { x: day, y: co2Level };
    });
  });

  const dataY = chartData.map((dado) => {
    return dado.y;
  });

  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        /* data: dataY, */
        data: [312.0, 340.7, 300.5, 350.0, 360.3, 343.9, 360.3],
        color: () => `#55BEF8`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: [323.0, 330.7, 320.5, 320.0, 310.3, 313.9, 305.3],
        color: () => `#176EBB`, // optional
        strokeWidth: 2, // optional
      },
      
      {
        data: [315.0, 317.6, 320.2, 315.9, 313.5, 314.9, 323.4],
        color: () => `#004685`, // optional
        strokeWidth: 2, // optional
      }
    ],
    legend: ["CAMCOMB01", "CAMCOMB02", "CAMCOMB03"], // optional
  };

  return (
    <>
      {/* Título da o componente */}
      <Text style={styles.title}>Emissão Semanal</Text>
      {/* Gráfico de Emissão diária */}
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 5,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 5,
        }}
      />
    </>
  );
};


