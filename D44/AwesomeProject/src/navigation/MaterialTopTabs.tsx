import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LoginForm } from "../components/LoginForm";
import RootNavigation from "./RootNavigation";

const Tab = createMaterialTopTabNavigator();

export const MaterialTopTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Login" component={LoginForm} />
            <Tab.Screen name="Lobby" component={RootNavigation} />
        </Tab.Navigator>
    );
};