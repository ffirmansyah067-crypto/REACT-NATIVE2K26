import React from "react";
import { View, Text, TextInput, Modal, Button, StyleSheet, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const LoginForm = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const handleLogin = () => {
        // Perform login logic here
        // If login is successful, show the modal
        setIsModalVisible(true);
    };

  return (
    <SafeAreaProvider>
      <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.img} />
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.container}>
          <Text style={styles.title}>Login Successful!</Text>
        </View>
      </Modal>
      <View style={styles.container}>
        <Text style={styles.title}>Login Form</Text>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: "100%",
    },
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
        alignItems: "center",
        alignSelf: "center",
        marginTop: 50,
        padding: 10,
    }
});
