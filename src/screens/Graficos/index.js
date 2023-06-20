import { ScrollView, Text, View } from "react-native";
import { Header } from "capivair/src/components/header";
import styles from "capivair/style";

import DailyEmission from "capivair/src/components/Charts/DailyEmission";
import Pollution from "capivair/src/components/Charts/Pollution";
import Weekly from 'capivair/src/components/Charts/Weekly';

export default function Graficos() {
  return (
    <ScrollView>
      <Header />
      <View style={styles.screen_dashboard}>
        <Text style={styles.tituloL}>Gráficos</Text>
        <DailyEmission />
        <Pollution />
        <Weekly/>
      </View>
    </ScrollView>
  );
}
