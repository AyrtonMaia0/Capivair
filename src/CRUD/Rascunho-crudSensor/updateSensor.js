import React, { useState } from "react";
import axios from "axios";
import styles from "../Rascunho-styleCrudSensor/styleUpdateSensor"; //chamando pasta de estilização
import { View, Text, TextInput, TouchableOpacity } from "react-native";
//--

export default function UpdateSensor() {
  const [sensorProcurar, setSensorProcurar] = useState("");
  const [sensorParaAlterar, setSensorParaAlterar] = useState("");

  const [sensorNome, setSensorNome] = useState("");
  const [sensorId, setSensorId] = useState("");
  const [sensorStatus, setSensorStauts] = useState("");
  const [sensorX, setSensorX] = useState("");
  const [sensorY, setSensorY] = useState("");

  const [sensorCriado, setSensorCriado] = useState(null);


//PRIMEIRA FUNCAO -> Procurar Sensor
  async function handleAlterar() {
    try {
      console.log("Tela Update");

      const res = await axios.get("https://back-people.onrender.com/sensor"); //Busca dos Sensores na API
      const sensors = res.data.sensor;
      //console.log(sensors); //Retorna os sensores da API

      let sensorEncontrado = null;
      for (let i = 0; i < sensors.length; i++) {
        if (sensors[i].nome.toLowerCase() === sensorProcurar.toLowerCase()) {
          sensorEncontrado = sensors[i];
          break;
        }
      }

    //--
      if (sensorEncontrado) {
        // Passa o sensor que foi encontrado para o 'state' e "libera" novos inputs na tela
        setSensorParaAlterar(sensorEncontrado);
        console.log(`Sensor: "${sensorEncontrado.nome}", Encontrado!`);
      } else {
        console.log(`Sensor com nome "${sensorProcurar}" não encontrado.`);
      }
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os sensores:", error);
    }
  }

//SEGUNDA FUNCAO -> Alterar Sensor
  async function buttonUpdate() {
    try {
      //Passar os Valores do Input para o 'objeto -> dados'
      const dados = {
        nome: sensorNome,
        id: sensorId,
        x: sensorX,
        y: sensorY,
        status: sensorStatus,
      };
      /* console.log(dados); */

      //ALTERANDO
      const url = `http://localhost:8080/https://back-people.onrender.com/sensor/${sensorParaAlterar._id}`;
      const response = await axios.patch(url, dados);

      console.log(response);
      setSensorCriado(dados);
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os sensores:", error);
    }
  }

  return (
    /* START CONTAINER */
    <View style={styles.container}>

    {/* START PROCURAR */}
      <TextInput
        style={styles.input}
        placeholder="Nome do Sensor a ser Alterado"
        value={sensorProcurar}
        onChangeText={(text) => setSensorProcurar(text)}
      />

      {/* START BUTTON PROCURAR */}
      <TouchableOpacity style={styles.button} onPress={handleAlterar}>
        <Text style={styles.buttonText}>Procurar Sensor</Text>
      </TouchableOpacity>
      {/* END BUTTON PROCURAR */}

    {/* END PROCURAR */}


{/* --APOS O CLIQUE E A VALIDACAO-- */}
      {sensorParaAlterar && (
        <View style={styles.sensorContainer}>

        {/* START INPUTs */}
          <TextInput
            style={styles.input}
            placeholder="Digite o Novo Nome do Sensor"
            value={sensorNome}
            onChangeText={(text) => setSensorNome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite o Novo ID do Sensor"
            value={sensorId}
            onChangeText={(text) => setSensorId(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite o Novo Status do Sensor"
            value={sensorStatus}
            onChangeText={(text) => setSensorStauts(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite o Novo X do Sensor"
            keyboardType="numeric"
            value={sensorX}
            onChangeText={(text) => setSensorX(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite o Novo Y do Sensor"
            keyboardType="numeric"
            value={sensorY}
            onChangeText={(text) => setSensorY(text)}
          />
        {/* END INPUTs */}


        {/* START BUTTON ADD SENSOR */}
          <TouchableOpacity style={styles.button} onPress={buttonUpdate}>
            <Text style={styles.buttonText}>Salvar Alteração</Text>
          </TouchableOpacity>
        {/* END BUTTON ADD SENSOR */}


        {sensorCriado && (
          <View>
            --Sensor Alterado--
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
      )}
    </View>
    /* END CONTAINER */
  );
}
