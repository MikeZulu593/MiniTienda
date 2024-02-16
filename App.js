import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Bienvenido from "./components/Bienvenido";
import Productos from "./components/Productos";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Bienvenido"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#A2E1B8', 
          },
          headerTintColor: 'black', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Bienvenido" component={Bienvenido} />
        <Stack.Screen name="Productos" component={Productos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}