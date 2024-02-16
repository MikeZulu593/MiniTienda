import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../styles";

//LISTA DE PRODUCTOS QUE SE MUESTRAN

const Productos = () => {
  const products = [
    {
      id: 1,
      nombre: "Arroz Envejecido Portiarroz",
      precio: 0.65,
      pathImage:
        "https://portiarroz.com.ec/wp-content/uploads/2020/06/Arroz-conejo-viejo-funda.jpg",
    },
    {
      id: 2,
      nombre: "Azúcar Valdez 1kg",
      precio: 1.2,
      pathImage:
        "https://almacenescorsa.com/wp-content/uploads/2021/07/Azucar-Valdez-blanco-1kg.jpg",
    },
    {
      id: 3,
      nombre: "Funda de Papa Chola 5kg",
      precio: 2.5,
      pathImage:
        "https://www.supermercadosantamaria.com/documents/10180/10504/65700_G.jpg",
    },
    {
      id: 4,
      nombre: "Fideo Codito Amancay",
      precio: 1.0,
      pathImage:
        "https://d2o812a6k13pkp.cloudfront.net/Productos/40384049_0120230914131903.jpg",
    },
    {
      id: 5,
      nombre: "Cris Sal 2kg",
      precio: 0.8,
      pathImage:
        "https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg",
    },
  ];

  const total = products.reduce((total, product) => total + product.precio, 0);

  const image = require("../assets/backgroundProductos.png");

  return (
    <ImageBackground source={image} style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image
              source={{ uri: item.pathImage }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.nombre}</Text>
              <Text style={styles.productPrice}>{item.precio}</Text>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.totalContainer}>
        <Text style={styles.total}>Total: $ {total.toFixed(2)}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Productos;
