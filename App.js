import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from "./src/pages/homeScreen"
import IndusturyFitScreen from "./src/pages/industyFitScreen"
import AboutScreen from "./src/pages/aboutScreen"
import FitnessScreen from "./src/pages/fitnessScreen"
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreeNavigator} from "./src/customizeNavigation"
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          labelStyle:{fontSize:18},
          activeTintColor: 'red'
        }}
      >
        <Tab.Screen
          name="Fitness"
          component={HomeScreeNavigator}
        />
        <Tab.Screen
          name="Social"
          component={IndusturyFitScreen}
        />
        <Tab.Screen
          name="Me"
          component={AboutScreen}
        />
      </Tab.Navigator>

    </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
