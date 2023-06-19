//import React Native components
import { Text, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import styles from '../../../style';
const screenWidth = Dimensions.get("window").width - 16;

export default function poluentes() {

  const dados_mockados = require("capivair/services/dados.json");
  const dadosPoluentes = Object.keys(dados_mockados.poluentes);

  const data = dadosPoluentes.map((chave, index) => {

    return {
      name: chave,
      population: dados_mockados.poluentes[chave],
      color: index === 0 ? '#55BEF8' : index === 1 ? '#176EBB' : index === 2 ? '#004685' : '#C3EBFF',
      legendFontColor: '#7F7F7F',
      legendFontSize: 10,
    };
  })
  

  return (
    <>
      <Text style={styles.title}>Poluentes</Text>
      <PieChart
        data={data}
        width={screenWidth}
        height={230}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 5
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 5
        }}
        accessor="population"
        backgroundColor="#fff"
        paddingLeft="3"
        center={[5, 0]}
        /* absolute */ //for the absolute number remove if you want percentage
      />
    </>
  );
};
