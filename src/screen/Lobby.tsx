import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


export const Lobby = () => {
    const navigation = useNavigation();

    const handleGoToPageX = () => {
        if (navigation) {
            navigation.navigate("PageX" as never);
        }
    };
    return (
        <View>
            <Text style={styles.title}>Lobby</Text>
            <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.img} />
            <Button title="Go to Page X" onPress={handleGoToPageX} />
        </View>
    );
};


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    img: {
        width: 70,
        height: 70,
        marginBottom: 50,
        justifyContent: "center",
    },
});