import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Alert,
  TouchableOpacity
} from "react-native";

import { useNavigation } from "@react-navigation/native"; 
import React, { useState } from "react";
import styles from "../styles";


export default function Form() {
  const image = require("../assets/backgroundBienvenido.png");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation(); 

  //CREDENCIALES AUTORIZADAS
  const users = [
    { id: 1, username: "admin", password: "123456" },
    { id: 2, username: "itsqmet", password: "12345678" },
  ];

  //VERIFICACION DE CREDENCIALES
  const handleAccess = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      navigation.navigate("Productos");
    } else {
      Alert.alert("Credenciales incorrectas");
    }
  };

  return (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.title}>Inicie sesión</Text>
        <Text style={styles.label}>Nombre de usuario</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAccess}>
            <Text style={styles.buttonText}>Acceder</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
