import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/homeScreen'
import FitnessScreen from "./pages/fitnessScreen"

const Stack = createNativeStackNavigator();


export const HomeScreeNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="home"
                component={HomeScreen}
                options={{ headerShown: false }}

            />
             <Stack.Screen 
                name="fitness"
                component={FitnessScreen}
                options={{ headerShown: false }}

            />
        </Stack.Navigator>
    )
}
