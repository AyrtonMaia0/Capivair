import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
//import CreateSensor from '../CreateSensor/createSensor';
import axios from "axios";
import styles from "../styleCrudSensor/styleTodosSensor";
//--


export default function Sensores({ navigation }) {
  // Variáveis de estado para armazenar os valores dos sensores
  const [sensores, setSensores] = useState([]);


  // START FUNCTION READ SENSORES
  async function handleBuscar() {
    try {
      const response = await axios.get(
        "https://back-people.onrender.com/sensor"
      ); //Requisicao Get para a API
      setSensores(response.data.sensor); //Setando dados
      console.log(response); //Visualização desses dados
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os sensores:", error); //Caso ocorra algum erro
    }
  }
  //END FUNCTION READ SENSORES


  //START FUNCTION CHAMAR TELA CREATESENSOR
  async function handleCriar() {
    navigation.navigate("CreateSensor");
  }
  //END FUNCTION CHAMAR TELA CREATESENSOR


  //START FUNCTION CHAMAR TELA DELETESENSOR
  async function handleDeletar() {
    navigation.navigate("DeleteSensor");
  }
  //END FUNCTION CHAMAR TELA DELETESENSOR


  //START FUNCTION CHAMAR TELA UPDATESENSOR
  async function handleAlterar() {
    navigation.navigate("UpdateSensor");
  }
  //END FUNCTION CHAMAR TELA UPDATESENSOR


  return (
    // START CONTAINER
    <View style={styles.container}>
      <Text style={styles.title}>
        Veja todos os Sensores ao clicar no Botão Sensores!
      </Text>

      {/* START BOTAO BUSCAR */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={funcaoRead}
      >
        <Text style={styles.buttonText}>Sensores</Text>
      </TouchableOpacity>
      {/* END BOTAO BUSCAR */}

      {/* START BOTAO CRIAR */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleCriar}
      >
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
      {/* END BOTAO CRIAR */}


      {/* START BOTAO ALTERAR */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleAlterar}
      >
        <Text style={styles.buttonText}>Alterar</Text>
      </TouchableOpacity>
      {/* END BOTAO ALTERAR */}


      {/* START BOTAO DELETAR */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleDeletar}
      >
        <Text style={styles.buttonText}>Deletar</Text>
      </TouchableOpacity>
      {/* END BOTAO DELETAR */}


      {/* START EXIBIR INFO SENSORES */}
      {sensores.map((sensor, index) => (
        <View key={index} style={styles.sensorContainer}>
          <Text>
            <Text style={styles.boldText}>Nome: </Text>
            {sensor.nome}
          </Text>
          <Text>
            <Text style={styles.boldText}>Cód.Sensor: </Text>
            {sensor.id}
          </Text>
          <Text>
            <Text style={styles.boldText}>Status: </Text>
            {sensor.status}
          </Text>
          <Text>
            <Text style={styles.boldText}>Área: </Text>
            {sensor.area}
          </Text>
        </View>
      ))}

      {/* END EXIBIR INFO SENSORES */}
    </View>
    // END CONTAINER
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: '#2F48D4',
    borderRadius: "5px",
    marginTop: "20px",
    padding: "8px",
    width: "100%",
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  sensorContainer: {
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
}); */
