import { ScrollView, Text, View } from "react-native";
import { Header } from "capivair/src/components/header";
import styles from "capivair/style";

import DailyEmission from "capivair/src/components/Charts/DailyEmission";
import Poluentes from 'capivair/src/components/Charts/Pollution';
import Weekly from 'capivair/src/components/Charts/Weekly';
/* 
import BarChart_ from "../../components/Charts/Models/_BarChart";
import LineChart_ from "../../components/Charts/Models/_LineChart";
import BezierLineChart_ from "../../components/Charts/Models/_BezierLineChart";
import ProgressChart_ from '../../components/Charts/Models/_ProgressChart';
import BarChart_ from '../../components/Charts/Models/_BarChart';
import StackedBarChart_ from '../../components/Charts/Models/_StackedBarChart';
import PieChart_ from '../../components/Charts/Models/_PieChart';
import ContributionGraph_ from '../../components/Charts/Models/_ContributionGraph';
 */

export default function Graficos() {
  return (
    <ScrollView>
      <Header />
      <View style={styles.screen_dashboard}>
        <Text style={styles.tituloL}>Gráficos</Text>
        <DailyEmission />
        <Poluentes/>
        <Weekly/>
        {/* 
        <LineChart_ />
        <BezierLineChart_ />
        <BarChart_ /> 
        */}
      </View>
    </ScrollView>
  );
}
