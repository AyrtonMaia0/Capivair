import { ScrollView, Text, View } from "react-native";
import { Header } from "capivair/src/components/header";
import styles from "capivair/style";

import DailyEmission from "capivair/src/components/Charts/DailyEmission";
import Pollution from "capivair/src/components/Charts/Pollution";
import TotalEmission from "capivair/src/components/Charts/TotalEmission";
import Weekly from 'capivair/src/components/Charts/Weekly';
/* 
import BarChart_ from "capivair/src/components/Charts/Models/_BarChart";
import BezierLineChart_ from "capivair/src/components/Charts/Models/_BezierLineChart";
import ProgressChart_ from 'capivair/src/components/Charts/Models/_ProgressChart';
import LineChart_ from "capivair/src/components/Charts/Models/_LineChart";
import StackedBarChart_ from 'capivair/src/components/Charts/Models/_StackedBarChart';
import PieChart_ from 'capivair/src/components/Charts/Models/_PieChart';
import ContributionGraph_ from 'capivair/src/components/Charts/Models/_ContributionGraph';
 */

export default function Graficos() {
  return (
    <ScrollView>
      <Header />
      <View style={styles.screen_dashboard}>
        <Text style={styles.tituloL}>Gráficos</Text>
        <TotalEmission />
        <DailyEmission />
        <Pollution />
        <Weekly/>
        {/* 
        <BarChart_ />
        <BezierLineChart_ />
        <LineChart_ />
        */}
      </View>
    </ScrollView>
  );
}
