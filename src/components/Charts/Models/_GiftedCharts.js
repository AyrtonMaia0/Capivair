//import React Native components
import { Text, Dimensions } from 'react-native';

//import React Native chart Kit for different kind of Chart
/* import { LineChart } from 'react-native-chart-kit'; */

//
import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts';

//import styles definitions
import styles from '../../../../style';


export default (props) => {
  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];
  const data2 = [{ value: 30 }, { value: 20 }, { value: 40 }, { value: 40 }];
  return (
    <>
      <BarChart data={data} />
      <LineChart data={data} data2={data2} />
      <PieChart data={data} />
    </>
  );
};
