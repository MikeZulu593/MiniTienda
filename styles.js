import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    marginBottom: 0,
    marginTop: 110,
  },
  label: {
    fontSize: 18,
    color: "black",
    marginBottom: 0,
    marginTop: 30,
  },
  input: {
    height: 40,
    borderColor: "lightgreen",
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 5,
    marginTop: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    backgroundColor: "#66bb7b",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "lightgreen",
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productInfo: {
    justifyContent: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 10,
  },
  totalContainer: {
    backgroundColor: "lightgreen",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  flatList: {
    marginTop: 100,
  },
});
