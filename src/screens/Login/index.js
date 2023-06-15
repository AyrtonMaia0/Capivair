import {Text, View,  TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {Hedl} from '../../components/headerL';
import styles from '../../../style';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Login(){
    const navigation = useNavigation();
    return (
        <View style={styles.tela}>
            <StatusBar style="auto" />
            <Hedl />
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.boxbackground}>
                    <Text style={styles.tituloL}>Login</Text>
                    <View style={{alignItems: 'center'}}>
                        <TextInput  placeholder="E-mail" placeholderTextColor= '#818181' style={styles.inputEmail}/>
                        <TextInput  placeholder="Senha" placeholderTextColor= '#818181' style={styles.inputSenha}/>
                        <Text style={{marginTop: 10, fontSize: 15}}>Esqueci minha senha</Text>
                        <TouchableOpacity style={styles.butEntrar} onPress={() => navigation.navigate('Home')}>
                            <Text style={{color: '#fff', fontSize: 16}}>Entrar</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 15, marginTop: '3%'}}>Don't have an account?</Text>
                    </View>
                    
                </View>
                
            </View>
            
        </View>
    )
}

