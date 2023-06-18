import React, { useState } from "react";
import { Header } from "../../components/header";
import stylss from "../../../style";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput, Text
} from "react-native";

export default function Monitoramento() {
  //Ajustes que serao passados no point location
  const ajusteX = 150;
  const ajusteY = 350;

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
    <View style={{flex: 1, width: "100%", backgroundColor: "#fff",}}>
      <Header />
      <Text style={{fontSize: 25, textAlign: 'center', color: '#00256E', fontWeight: "700"}}>Cadastrar</Text>

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
            width: "80%",
            height: '5%',
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
            width: "80%",
            height: '5%',
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
            width: "80%",
            height: '5%',
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
            width: "80%",
            height: '5%',
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
            width: "80%",
            height: '5%',
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
            source={require("../../../assets/planta_baixa_1.png")}
            style={styles.image}
          />

          {coordinates.x !== 0 && coordinates.y !== 0 && (
            <Image
              source={require("../../../assets/pin-loc-blue.png")}
              style={[
                styles.pinImage,
                {
                  left: coordinates.x - ajusteX, //115 Ajuste do tamanho do ponto de localização
                  top: coordinates.y - ajusteY, //180 Ajuste do tamanho do ponto de localização
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
    width: '100%'
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
