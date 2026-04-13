import React from "react";
import {  NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PageX } from "../screen/PageX";
import { ButtonNavigation } from "./ButtonNavigation";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Lobby' component={ButtonNavigation} /> 
                    <Stack.Screen name='PageX' component={PageX} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}
