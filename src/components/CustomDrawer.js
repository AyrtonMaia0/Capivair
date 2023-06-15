import React from "react";
import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/50.png")}
            style={{ height: 60, width: 60, borderRadius: 100, marginLeft: 20 }}
          />
          <View style={{ marginLeft: 15, paddingTop: 10 }}>
            <Text
              style={{ color: "#225FD7", fontSize: 18, fontWeight: "bold" }}>
              David Loo
            </Text>
            <Text style={{ color: "#818181", fontSize: 14 }}>
              Administrador
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 25 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View></View>
    </View>
  );
};

export default CustomDrawer;
