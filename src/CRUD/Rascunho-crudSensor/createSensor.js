
import React, { useState } from "react";
import axios from "axios";
import styles from "../styleCrudSensor/styleCreateSensor";  //chamando pasta de estilização
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
//--

export default function CreateSensor() {
  // Variáveis de estado para armazenar os valores dos sensores
  const [sensorNome, setSensorNome] = useState("");
  const [sensorId, setSensorId] = useState("");
  const [sensorStatus, setSensorStauts] = useState("");
  const [sensorX, setSensorX] = useState("");
  const [sensorY, setSensorY] = useState("");
  const [sensorCriado, setSensorCriado] = useState(null);


  async function handleBuscar() {
    try {
      console.log("Tela Create");

      const dados = { nome: sensorNome, id: sensorId, x: sensorX, y: sensorY, status: sensorStatus };
      console.log(dados);

      const url = "http://127.0.0.1:8080/https://back-people.onrender.com/sensor/"; //Criando Objeto com os Valore dos Inputs

      const response = await axios.post(url, dados); // Envia o objeto 'dados' como corpo da requisição POST

      setSensorCriado(dados);

      console.log(response.data); // Visualizar dado no Console
    } catch (error) {
      console.error("Ocorreu um erro ao cadastrar o sensor:", error); //Em caso de erro, exibir no Console = (Mensagem + Tipo do Erro)
    }
  }

  return (
    /* START CONTAINER */
    <View style={styles.container}>

      {/* START INPUTs */}
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do sensor"
        value={sensorNome}
        onChangeText={(text) => setSensorNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o ID do sensor"
        value={sensorId}
        onChangeText={(text) => setSensorId(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o Status do sensor"
        value={sensorStatus}
        onChangeText={(text) => setSensorStauts(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o X do sensor"
        keyboardType="numeric"
        value={sensorX}
        onChangeText={(text) => setSensorX(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o Y do sensor"
        keyboardType="numeric"
        value={sensorY}
        onChangeText={(text) => setSensorY(text)}
      />
      {/* END INPUTs */}


      {/* START BUTTON ADD SENSOR */}
      <TouchableOpacity style={styles.button} onPress={handleBuscar}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      {/* END BUTTON ADD SENSOR */}


      {sensorCriado && (
        <View style={styles.sensorContainer}>
            --Sensor Criado--
            <Text style={styles.boldText}>
              Nome: 
              {sensorCriado.nome}
            </Text>
            <Text style={styles.boldText}>
              ID: 
              {sensorCriado.id}
            </Text>
            <Text style={styles.boldText}>
              Status: 
              {sensorCriado.status}
            </Text>
            <Text style={styles.boldText}>
              X: 
              {sensorCriado.x}
            </Text>
            <Text style={styles.boldText}>
              Y: 
              {sensorCriado.y}
            </Text>
        </View>
      )}


    </View>
    /* END CONTAINER */
  );
}
