import { ScrollView, Text, View } from "react-native";
import { Header } from "../../components/header";
import styles from "../../../style";

import DailyEmission from "../../components/Charts/DailyEmission";
import Api_BarChart from "../../components/Charts/Api_BarChart";
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
    <ScrollView style={styles.tela}>
      <Header />
      <Text style={styles.tituloL}>Gráficos</Text>
      
      <DailyEmission />

      <Api_BarChart />

      {/* 
      <LineChart_ />
      <BezierLineChart_ />
      <BarChart_ /> 
      */}
    </ScrollView>
  );
}
