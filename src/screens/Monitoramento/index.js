import React, { useState } from "react";
import { Header } from "../../components/header";
import stylss from "../../../style";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

export default function Monitoramento() {
  // Ajustes que serão passados no ponto de localização
  const ajusteX = 145;
  const ajusteY = 390;

  const [sensorNome, setSensorNome] = useState("");
  const [sensorStatus, setSensorStatus] = useState("");
  const [sensorTipo, setSensorTipo] = useState("");
  const [sensorId, setSensorId] = useState("");
  const [sensorArea, setSensorArea] = useState("");

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleImagePress = (event) => {
    const { pageX, pageY } = event.nativeEvent;

    // Captura as coordenadas do clique
    const x = pageX.toFixed(2);
    const y = pageY.toFixed(2);

    // Atualiza as coordenadas
    setCoordinates({ x, y });
    console.log("Puro: X[" + x + "] | Y[" + y + "]");
    console.log(
      "Tratado: X[" +
        (x - 120).toFixed(2) +
        "] | Y[" +
        (y - 210).toFixed(2) +
        "]"
    );
    enviar(x, y);
  };

  function enviar(x, y) {
    if (sensorNome == "" || sensorId == "" || sensorStatus == "") {
      Alert.alert("Atenção", "É obrigatório o preenchimento dos campos Nome, Código e Status dos sensores!");

      // alert("Atenção!", "");
      return;
    } else {
      const dados = {
        nome: sensorNome,
        id: sensorId,
        x: x,
        y: y,
        status: sensorStatus,
        tipo: sensorTipo,
        area: sensorArea,
      };
      const url = "https://back-people.onrender.com/sensor";
      const response = axios.post(url, dados);
      console.log(response);
      console.log(dados);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          color: "#00256E",
          fontWeight: "700",
        }}>
        Cadastrar
      </Text>

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        {/* Input Nome */}
        <TextInput
          placeholder="Nome"
          value={sensorNome}
          onChangeText={(text) => setSensorNome(text)}
          placeholderTextColor="#878787"
          style={styles.input}
        />

        {/* Input Status */}
        <TextInput
          placeholder="Status"
          value={sensorStatus}
          onChangeText={(text) => setSensorStatus(text)}
          placeholderTextColor="#878787"
          style={styles.input}
        />

        {/* Input Tipo */}
        <TextInput
          placeholder="Tipo"
          value={sensorTipo}
          onChangeText={(text) => setSensorTipo(text)}
          placeholderTextColor="#878787"
          style={styles.input}
        />

        {/* Input Codigo */}
        <TextInput
          placeholder="Código"
          value={sensorId}
          onChangeText={(text) => setSensorId(text)}
          placeholderTextColor="#878787"
          style={styles.input}
        />

        {/* Input Área */}
        <TextInput
          placeholder="Área"
          value={sensorArea}
          onChangeText={(text) => setSensorArea(text)}
          placeholderTextColor="#878787"
          style={styles.input}
        />

        {/* START BUTTON IMAGE */}
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require("../../../assets/planta_baixa_1.png")}
            style={styles.image}
          />

          {coordinates.x !== 0 && coordinates.y !== 0 && (
            <Image
              source={require("../../../assets/pin-loc-blue.png")}
              style={[
                styles.pinImage,
                {
                  left: coordinates.x - ajusteX,
                  top: coordinates.y - ajusteY,
                },
              ]}
            />
          )}
        </TouchableOpacity>
        {/* END BUTTON IMAGE */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 20,
  },
  input: {
    width: "70%",
    height: 40,
    backgroundColor: "#f3f3f3",
    borderRadius: 2,
    paddingLeft: 9,
    margin: 2,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  image: {
    width: 150,
    height: 410,
  },
  pinImage: {
    position: "absolute",
    width: 32,
    height: 32,
  },
});
