//import React Native components
import { Text, Dimensions } from 'react-native';

//import React Native chart Kit for different kind of Chart
import { ProgressChart } from 'react-native-chart-kit';

//import styles definitions
import styles from '../../../../style';


export default (props) => {
  return (
    <>
      <Text style={styles.title}>Progress Chart</Text>
      <ProgressChart
        data={[0.4, 0.6, 0.8]}
        width={Dimensions.get('window').width - 16}
        height={220}
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
          borderRadius: 16,
        }}
      />
    </>
  );
};
