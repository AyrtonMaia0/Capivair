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
} from "react-native";

export default function Monitoramento() {
  const [sensorNome, setSensorNome] = useState("");
  const [sensorStatus, setSensorStauts] = useState("");
  const [sensorTipo, setSensorTipo] = useState("");
  const [sensorId, setSensorId] = useState("");
  const [sensorArea, setSensorArea] = useState("");

  /* START -> X e Y */
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
  /* END -> X e Y */

  function enviar(x, y) {
    const dados = {
      nome: sensorNome,
      id: sensorId,
      x: x,
      y: y,
      status: sensorStatus,
      tipo: sensorTipo,
      area: sensorArea
    };
    const url = "https://back-people.onrender.com/sensor";
    const response = axios.post(url, dados);
    console.log(response);
    console.log(dados);
  }

  return (
    <View style={stylss.tela}>
      <Header />
      {/* <Text>Ola</Text> */}

      <View style={styles.container}>
        {/* Input Nome */}
        <TextInput
          placeholder="Nome"
          /* onChangeText={(nome) => setVarSensor({ ...varSensor, nome })} */
          //value={varSensor ? varSensor.nome : null}
          value={sensorNome}
          onChangeText={(text) => setSensorNome(text)}
          placeholderTextColor="#878787"
          style={{
            width: "57%",
            backgroundColor: "#f3f3f3",
            borderRadius: 2,
            paddingLeft: 9,
            margin: 2,
            borderWidth: 1,
            borderColor: "#D9D9D9",
          }}
        />

        {/* Input Status */}
        <TextInput
          placeholder="Status"
          /* onChangeText={(nome) => setVarSensor({ ...varSensor, nome })} */
          //value={varSensor ? varSensor.nome : null}
          value={sensorStatus}
          onChangeText={(text) => setSensorStauts(text)}
          placeholderTextColor="#878787"
          style={{
            width: "57%",
            backgroundColor: "#f3f3f3",
            borderRadius: 2,
            paddingLeft: 9,
            margin: 2,
            borderWidth: 1,
            borderColor: "#D9D9D9",
          }}
        />

        {/* Input Tipo */}
        <TextInput
          placeholder="Tipo"
          /* onChangeText={(nome) => setVarSensor({ ...varSensor, nome })} */
          //value={varSensor ? varSensor.nome : null}
          value={sensorTipo}
          onChangeText={(text) => setSensorTipo(text)}
          placeholderTextColor="#878787"
          style={{
            width: "57%",
            backgroundColor: "#f3f3f3",
            borderRadius: 2,
            paddingLeft: 9,
            margin: 2,
            borderWidth: 1,
            borderColor: "#D9D9D9",
          }}
        />

        {/* Input Codigo */}
        <TextInput
          placeholder="Código"
          /* onChangeText={(nome) => setVarSensor({ ...varSensor, nome })} */
          //value={varSensor ? varSensor.nome : null}
          value={sensorId}
          onChangeText={(text) => setSensorId(text)}
          placeholderTextColor="#878787"
          style={{
            width: "57%",
            backgroundColor: "#f3f3f3",
            borderRadius: 2,
            paddingLeft: 9,
            margin: 2,
            borderWidth: 1,
            borderColor: "#D9D9D9",
          }}
        />

        {/* Input Área */}
        <TextInput
          placeholder="Área"
          /* onChangeText={(nome) => setVarSensor({ ...varSensor, nome })} */
          //value={varSensor ? varSensor.nome : null}
          value={sensorArea}
          onChangeText={(text) => setSensorArea(text)}
          placeholderTextColor="#878787"
          style={{
            width: "57%",
            backgroundColor: "#f3f3f3",
            borderRadius: 2,
            paddingLeft: 9,
            margin: 2,
            borderWidth: 1,
            borderColor: "#D9D9D9",
          }}
        />
        

        {/* START BUTTON IMAGE */}
        <TouchableOpacity
          onPress={handleImagePress} /* onPress={() => handleImagePress()} */
        >
          <Image
            source={require("../../../assets/Map-Planta-0.5x.png")}
            style={styles.image}
          />

          {coordinates.x !== 0 && coordinates.y !== 0 && (
            <Image
              source={require("../../../assets/pin-loc-red.png")}
              style={[
                styles.pinImage,
                {
                  left: coordinates.x - 120, //115 Ajuste do tamanho do ponto de localização
                  top: coordinates.y - 210, //180 Ajuste do tamanho do ponto de localização
                },
              ]}
            />
          )}
        </TouchableOpacity>
        {/* END BUTTON IMAGE */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 480,
  },
  pinImage: {
    position: "absolute",
    width: 32,
    height: 32,
  },
});
