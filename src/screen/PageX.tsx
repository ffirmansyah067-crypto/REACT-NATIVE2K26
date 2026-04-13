import React from "react";
import {Text} from "react-native";
import { Image } from "react-native";

export const PageX = () => {
    return (
        <>
            <Text>Page X</Text>
            <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={{ width: 70, height: 70 }} />
        </>
    );
}
