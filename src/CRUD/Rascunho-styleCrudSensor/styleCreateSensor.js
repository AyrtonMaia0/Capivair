import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },

  title: {
    fontSize: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#2F48D4",
    borderRadius: "5px",
    marginTop: "20px",
    padding: "8px",
    width: "100%",
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default styles;
