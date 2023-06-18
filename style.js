import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    width: "100%",
    backgroundColor: "#D9D9D9",
  },
  perfil: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 25,
  },
  logoH: {
    width: 40,
    height: 40,
    marginLeft: 25,
  },
  header: {
    backgroundColor: "#FFFFFF",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  drawerLabel: {
    marginLeft: -18,
    fontSize: 16,
    padding: 10,
  },
  tituloL: {
    fontSize: 35,
    textAlign: "center",
    paddingTop: 22,
    color: "#00256E",
    fontWeight: "700",
  },
  inputEmail: {
    height: "17%",
    width: "90%",
    borderRadius: 17,
    marginTop: 33,
    color: "#000",
    backgroundColor: "#d9d9d9",
    paddingLeft: 15,
  },
  inputSenha: {
    height: "17%",
    width: "90%",
    marginTop: 20,
    borderRadius: 17,
    color: "#000",
    backgroundColor: "#d9d9d9",
    paddingLeft: 15,
  },
  butEntrar: {
    backgroundColor: "#00256E",
    alignItems: "center",
    justifyContent: "center",
    height: "16%",
    borderRadius: 30,
    width: "90%",
    marginTop: "5%",
  },
  boxbackground: {
    width: "90%",
    height: "70%",
    backgroundColor: "#fff",
    marginTop: 50,
    borderRadius: 10,
  },
  /* Charts */
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    paddingTop: 30,
    backgroundColor: "#ecf0f1",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
  screen_dashboard: {
    flex: 1,
    width: "100%",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
  },
});

export default styles;
