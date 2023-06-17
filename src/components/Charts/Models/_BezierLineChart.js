//import React Native components
import { Text, Dimensions } from 'react-native';

//import React Native chart Kit for different kind of Chart
import { LineChart } from 'react-native-chart-kit';

//import styles definitions
import styles from '../../../../style';


export default (props) => {
  return (
    <>
      <Text style={styles.title}>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16} // from react-native
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
          propsForBackgroundLines: {
            strokeDasharray: '', // solid background lines with no dashes
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};
