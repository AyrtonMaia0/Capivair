//import React Native components
import { Text, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import styles from '../../../../style';



export default function semanal() {

/*const dados_mockados = require("capivair/services/dados.json"); 
  const dadosSemanais = Object.keys(dados_mockados.emissao_sensores);
  console.log(dadosSemanais);  */

  /* const data = dadosSemanais.map((chave, index) => {
    return {
      labels: [chave],
      datasets: [
        {
          label: chave,
          data: [dados_mockados.emissao_sensores[chave]]
        }
      ]
    }; 
  
  })
  console.log(data) */


  return (
    <>
      <Text style={styles.title}>Semanal</Text>
      <BarChart
        data={{}}
      />
      {/* <BarChart
        data={{}}
        width={Dimensions.get('window').width - 16}
        height={230}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 5,
        }}
      /> */}
    </>
  );
};
