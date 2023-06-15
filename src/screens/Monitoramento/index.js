import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Header } from '../../components/header';
import axios from 'axios';
import stylss from '../../../style';

export default function Monitoramento() {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    const handleImagePress = (event) => {
    
    
      const { pageX, pageY } = event.nativeEvent;
    
      // Captura as coordenadas do clique
      const x = pageX.toFixed(2);
      const y = pageY.toFixed(2);

    
      // Atualiza as coordenadas
      setCoordinates({ x, y });
      console.log("Puro: X["+x+"] | Y["+y+"]");
      console.log("Tratado: X["+(x - 120) +"] | Y["+ (y - 210)+"]");
    
      const dados = {nome: "google", id: "codigo", x: x, y: y, status: "morri"};
      const url = 'https://back-people.onrender.com/sensor';
      const response = axios.post(url, dados);
      console.log(response);
      console.log(dados.x);
    };



    return (
        <View style ={stylss.tela}>
            <Header/>
            <Text>Ola</Text>


            <View style={styles.container}>
                <TouchableOpacity onPress={handleImagePress}>
                    <Image
                        source={require('../../../assets/Map-Planta-0.5x.png')}
                        style={styles.image}
                    />
                    {coordinates.x !== 0 && coordinates.y !== 0 && (
                        <Image
                        source={require('../../../assets/pin-loc-red.png')}
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
            </View>
        </View>     
    );       
}



const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
image: {
  width: 200,
  height: 480,
},
pinImage: {
  position: 'absolute',
  width: 32,
  height: 32,
},
});