import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  Image,
  Dimensions,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./Logo.png")} style={styles.img} />
      <TouchableOpacity
        style={styles.btt}
        onPress={() => navigation.navigate("Time1")}
      >
        <Text style={styles.txt}>Time 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btt}
        onPress={() => navigation.navigate("Time2")}
      >
        <Text style={styles.txt}>Time 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btt}
        onPress={() => navigation.navigate("Time3")}
      >
        <Text style={styles.txt}>Time 3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btt}
        onPress={() => navigation.navigate("Time4")}
      >
        <Text style={styles.txt}>Time 4</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btt}
        onPress={() => navigation.navigate("Time5")}
      >
        <Text style={styles.txt}>Time 5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btt2}
        onPress={() => BackHandler.exitApp()}
      >
        <Text
          style={{
            fontSize: 60,
            color: "#ffffff",
            textAlign: "center",
            marginTop: 3+'%',
            marginBottom:3+'%'
          }}
        >
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181b1d",
    minHeight: Dimensions.get("screen").height,
  },
  txt: {
    fontSize: 50,
    color: "#ffe031",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  btt: {
    width: 85 + "%",
    height: 9 + "%",
    backgroundColor: "#396bba",
    borderRadius: 7,
    marginTop: 3 + "%",
    alignSelf: "center",
  },
  btt2: {
    width: 85 + "%",
    height: 12 + "%",
    backgroundColor: "#ff3530",
    borderRadius: 7,
    marginTop: 3 + "%",
    alignSelf: "center",
  },
  img: {
    width: 95 + "%",
    height: 15 + "%",
    marginTop: 2 + "%",
  },
});
