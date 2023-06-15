import {View, Image, Text} from 'react-native';
import styles from '../../style';

export const Header = () => {
    return (
        
        <View style = {styles.header}>
            <Image source={require('../../assets/vector.png')} style={styles.logoH}/>
            <Image source={require('../../assets/50.png')} style={styles.perfil}/>
        </View>
    )
}
