import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { funcaoDeleteSensors, funcaoUpdateSensors } from "../CRUD/crudSensores";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

export default function CustomModal({ isOpen, sensor, onModalClose }) {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    setVisivel(isOpen);
  }, [isOpen]);

  const [varSensor, setVarSensor] = useState({});
  useEffect(() => {
    setVarSensor(sensor);
  }, [sensor]);

  const closeModal = () => {
    setVisivel(false);
    setVarSensor({});
    onModalClose(); // Chama a função de recarregamento dos sensores
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visivel}
        style={{
          flex: 1,
          margin: 0,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            {/* START Box internal the Modal */}
            <View>
              {/* Button to CLOSE MODAL */}
              <View style={{ alignItems: "flex-end" }}>
                {/* START BUTTON */}
                <TouchableOpacity onPress={closeModal} style={styles.botao}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#878787",
                      textAlign: "center",
                    }}>
                    X
                  </Text>
                </TouchableOpacity>
                {/* END BUTTON */}
              </View>

              {/* 2 First Box */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: "5%",
                  height: "15%",
                }}>
                {/* Input Nome */}
                <TextInput
                  placeholder="Nome"
                  onChangeText={(nome) => setVarSensor({ ...varSensor, nome })}
                  value={varSensor ? varSensor.nome : null}
                  placeholderTextColor="#878787"
                  style={{
                    width: "57%",
                    backgroundColor: "#f3f3f3",
                    borderRadius: 2,
                    paddingLeft: 9,
                    borderWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                />
                {/* Input Status */}
                <TextInput
                  placeholder="Status"
                  onChangeText={(status) =>
                    setVarSensor({ ...varSensor, status })
                  }
                  value={varSensor ? varSensor.status : null}
                  placeholderTextColor="#878787"
                  style={{
                    width: "40%",
                    backgroundColor: "#f3f3f3",
                    borderRadius: 2,
                    paddingLeft: 9,
                    marginLeft: 10,
                    borderWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                />
              </View>

              {/* 2 box -> Tipo, Area */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: "5%",
                  height: "15%",
                }}>
                {/* Input Tipo */}
                <TextInput
                  placeholder="Tipo"
                  onChangeText={(tipo) => setVarSensor({ ...varSensor, tipo })}
                  value={varSensor ? varSensor.tipo : null}
                  placeholderTextColor="#878787"
                  style={{
                    height: "80%",
                    width: "57%",
                    backgroundColor: "#f3f3f3",
                    borderRadius: 2,
                    paddingLeft: 9,
                    borderWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                />

                {/* Input Area */}
                <TextInput
                  placeholder="Área"
                  onChangeText={(area) => setVarSensor({ ...varSensor, area })}
                  value={varSensor ? varSensor.area : null}
                  placeholderTextColor="#878787"
                  style={{
                    height: "80%",
                    width: "40%",
                    backgroundColor: "#f3f3f3",
                    borderRadius: 2,
                    paddingLeft: 9,
                    marginLeft: 10,
                    borderWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                />
              </View>

              {/* 3 box -> Id, X, Y */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: "5%",
                  height: "15%",
                }}>
                {/* Ipnut Codigo */}
                <TextInput
                  placeholder="ID"
                  onChangeText={(id) => setVarSensor({ ...varSensor, id })}
                  value={varSensor ? varSensor.id : null}
                  placeholderTextColor="#878787"
                  style={{
                    width: "51%",
                    backgroundColor: "#f3f3f3",
                    borderRadius: 2,
                    paddingLeft: 9,
                    borderWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                />

                {/* Input coordenada X */}
                <TextInput
                  placeholder="X"
                  onChangeText={(x) => {
                    x = parseFloat(x);
                    setVarSensor({ ...varSensor, x });
                  }}
                  value={varSensor ? String(varSensor.x) : null}
                  placeholderTextColor="#878787"
                  keyboardType="numeric"
                  style={{
                    width: "20%",
                    backgroundColor: "#f3f3f3",
                    borderRadius: 2,
                    paddingLeft: 9,
                    borderWidth: 1,
                    borderColor: "#D9D9D9",
                    marginLeft: "6%",
                  }}
                />

                {/* Input coordenada Y */}
                <TextInput
                  placeholder="Y"
                  onChangeText={(y) => {
                    y = parseFloat(y);
                    setVarSensor({ ...varSensor, y });
                  }}
                  value={varSensor ? String(varSensor.y) : null}
                  placeholderTextColor="#878787"
                  keyboardType="numeric"
                  style={{
                    width: "20%",
                    backgroundColor: "#f3f3f3",
                    borderRadius: 2,
                    paddingLeft: 9,
                    marginLeft: 10,
                    borderWidth: 1,
                    borderColor: "#D9D9D9",
                  }}
                />
              </View>

              {/* START BUTTONS */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: "10%",
                  justifyContent: "space-evenly",
                }}>
                {/* Button DELETE */}
                <TouchableOpacity
                  style={styles.botaoExc}
                  onPress={() => {
                    Alert.alert(
                      "Atenção",
                      "Você realmente deseja excluir o sensor " +
                        varSensor.id +
                        "?",
                      [
                        {
                          text: "Cancelar",
                          onPress: () => {
                            closeModal;
                          },
                          style: "cancel",
                        },
                        {
                          text: "OK",
                          onPress: () => {
                            funcaoDeleteSensors(varSensor);
                            closeModal;
                            closeModal();
                          },
                        },
                      ],
                      { cancelable: false }
                    );
                  }}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    EXCLUIR
                  </Text>
                </TouchableOpacity>

                {/* Button UPDATE */}
                <TouchableOpacity
                  style={styles.botaoSal}
                  onPress={() => {
                    funcaoUpdateSensors(varSensor);
                    alert(`Sensor ${varSensor.id} atualizado com sucesso!`);
                  }}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    SALVAR
                  </Text>
                </TouchableOpacity>
              </View>
              {/* END BUTTONS */}
            </View>
            {/* END Box internal the Modal */}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    marginTop: 22,
  },
  botao: {
    borderRadius: 2,
    width: "12%",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingTop: 2,
    paddingBottom: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    height: "60%", //Tamanho do Modal
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  botaoExc: {
    backgroundColor: "#f4400c",
    height: 35,
    width: 100,
    padding: 5,
    borderRadius: 5,
  },
  botaoSal: {
    backgroundColor: "#225FD7",
    height: 35,
    width: 100,
    padding: 5,
    borderRadius: 5,
  },
});
