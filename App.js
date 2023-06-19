import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Monitoramento from "./src/screens/Monitoramento";
import Graficos from "./src/screens/Graficos";
import CustomDrawer from "./src/components/CustomDrawer";
import Home from "./src/screens/Home";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Gráficos"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: {
            marginLeft: -18,
            fontSize: 16,
            padding: 10,
          },
          drawerActiveBackgroundColor: "#D8D8D8",
          drawerActiveTintColor: "#176EBB",
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="speedometer-outline" size={30} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Monitoramento"
          component={Monitoramento}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="grid-outline" size={30} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Gráficos"
          component={Graficos}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="bar-chart-outline" size={30} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
