import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Lobby } from "../screen/Lobby";
import { PageX } from "../screen/PageX";

const Tabs = createBottomTabNavigator();

export const ButtonNavigation = () => {
    return (
            <Tabs.Navigator>
                <Tabs.Screen options={{tabBarIcon: () => <Text>🏠</Text>}} name="Home" component={Lobby} />
                <Tabs.Screen options={{tabBarIcon: () => <Text>👤</Text>}} name="Profile" component={PageX} />
            </Tabs.Navigator>
    );
}