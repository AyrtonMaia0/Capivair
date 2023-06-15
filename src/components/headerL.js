import {StyleSheet, View, Text, Image} from 'react-native'

export const Hedl = () => {
    return (
        <View style = {styles.topo}>
            <Image source={require('../../assets/vector.png')} style={styles.logoL}/>
            <View style={styles.brasil}>
                <Text style={styles.texto}>Brasil</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#FFFFFF',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
     
    },
    texto: {
        fontSize: 15,
        color: '#ffff'
    },
    brasil: {
        backgroundColor: '#004685',
        width: 67,
        height: 32,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 35
    },
    logoL: {
        width: 40,
        height: 40,
        marginLeft: 25,
        
    }
});