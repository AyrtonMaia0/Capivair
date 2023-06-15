import Home from 'capivair/src/screens/Home';
import Monitoramento from '../../src/screens/Monitoramento/index';
import Graficos from '../../src/screens/Graficos/index';
import CustomDrawer from '../../src/components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function AppStack() {
    return (
        <Drawer.Navigator initialRouteName="Monitoramento" drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false, drawerLabelStyle: { marginLeft: -18, fontSize: 16, fontFamily: 'Roboto', padding: 10 }, drawerActiveBackgroundColor: '#D8D8D8', drawerActiveTintColor: '#176EBB' }}>
            <Drawer.Screen name="Home" component={Home} options={{
            drawerIcon: ({ color }) => (
                <Ionicons name="speedometer-outline" size={30} color={color} />
            )
            }} />
            <Drawer.Screen name="Monitoramento" component={Monitoramento} options={{
            drawerIcon: ({ color }) => (
                <Ionicons name="grid-outline" size={30} color={color} />
            )
            }} />
            <Drawer.Screen name="Gráficos" component={Graficos} options={{
            drawerIcon: ({ color }) => (
                <Ionicons name="bar-chart-outline" size={30} color={color} />
            )
            }} />
        </Drawer.Navigator>
    );
  }