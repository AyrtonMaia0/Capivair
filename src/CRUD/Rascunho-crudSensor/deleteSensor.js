import React, { useState } from "react";
import axios from "axios";
import styles from "../styleCrudSensor/styleDeleteSensor"; //chamando pasta de estilização
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function DeleteSensor() {
  // Variáveis de estado para armazenar os valores dos sensores
  const [sensores, setSensores] = useState([]);
  const [sensorNome, setSensorNome] = useState("");
  const [sensorExcluido, setSensorExcluido] = useState(null);

  async function handleDeletar() {
    console.log("Tela Delete");

    try {
      const res = await axios.get("https://back-people.onrender.com/sensor"); //Requisicao Get para a API
      const sensors = res.data.sensor;

      let sensorEncontrado = null;
      for (let i = 0; i < sensors.length; i++) {
        if (sensors[i].nome.toLowerCase() === sensorNome.toLowerCase()) {
          sensorEncontrado = sensors[i];
          console.log(sensorEncontrado.id);
          break;
        }
      }

      
      if (sensorEncontrado) {
        // Atualiza o estado 'sensorExcluido' com o sensor encontrado
        setSensorExcluido(sensorEncontrado);

        const response = await axios.delete(
          `http://localhost:8080/https://back-people.onrender.com/sensor/${sensorEncontrado._id}`
        );
        console.log(response)

        // Atualiza o estado 'sensores' excluindo o sensor encontrado
        setSensores(prevSensores =>
          prevSensores.filter(sensor => sensor.id !== sensorEncontrado.id)
        );

        console.log(`Sensor: "${sensorNome}", deletado!`);

      } else {
        console.log(`Sensor com nome "${sensorNome}" não encontrado.`);
      }
      
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os sensores:", error);
    }
  }

  return (
    // START CONTAINER
    <View style={styles.container}>
      <Text style={styles.title}>PAGINA DELETE</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do sensor"
        value={sensorNome}
        onChangeText={(text) => setSensorNome(text)}
      />

      {/* START BUTTON ADD SENSOR */}
      <TouchableOpacity style={styles.button} onPress={handleDeletar}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
      {/* END BUTTON ADD SENSOR */}

      {sensorExcluido && (
      <View style={styles.sensorContainer}>
          Sensor excluído:
          <Text>
            <Text style={styles.boldText}> Nome: </Text>
            {sensorExcluido.nome}
          </Text>
          <Text>
            <Text style={styles.boldText}> ID: </Text>
            {sensorExcluido.id}
          </Text>
          <Text>
            <Text style={styles.boldText}> X: </Text>
            {sensorExcluido.x}
          </Text>
          <Text>
            <Text style={styles.boldText}> Y: </Text>
            {sensorExcluido.y}
          </Text>
      </View>
    )}
    </View>
    // END CONTAINER
  );
}
