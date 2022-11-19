import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Item from "../Components/item.js";
import { games } from "../MockData/games.js";

import handleDb from "../DataBaseConfig.js";

const party = require("../MockData/party.json").party;

export default function Team() {
  const [open, setOpen] = useState(false);
  const [value0, setValue0] = useState(null);
  const [items, setItems] = useState(games());
  const [save,setSave] = useState(false);
  const [deleta,setDeleta] = useState(false);

  const renderItem = props => <Item item={props} />;

  useEffect(() => {
    handleDb.all()
      .then(res => {
        console.log("Tá puxando eh tudo kkkkkkk", res);
        obj=_array
      })
  }, [])

  return (
    <View style={styles.container}>
      <DropDownPicker
        style={styles.picker}
        open={open}
        value={value0}
        items={items}
        setOpen={setOpen}
        setValue={setValue0}
        setItems={setItems}
        placeholder="Escolha um Jogo"
        textStyle={{ color: "#074db5" }}
        searchable={true}
        dropDownContainerStyle={{
          backgroundColor: "#c4c4c4",
          width: 70 + "%",
          alignSelf: "center",
        }}
      />
      <View style={styles.btns}>
        <TouchableOpacity style={styles.save} onPress={() => setSave(true)}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 25 }}>
            Salvar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delete} onPress={() => setDeleta(true)}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 25 }}>
            Excluir
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={party}
        renderItem={(item) => renderItem({ item, value0, save, setSave, setDeleta, deleta })}
        keyExtractor={(item) => item.id}
        style={styles.flatlist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181b1d",
  },
  flatlist: {
    width: 100 + "%",
    paddingHorizontal: 20,
  },
  PkmContainer: {
    borderWidth: 5,
    padding: 3,
    marginTop: 5,
    marginBottom: 3,
    borderRadius: 10,
    width: 100 + "%",
    flexDirection: "row",
    backgroundColor: "#303030",
    flex: 1,
  },
  atk: {
    borderWidth: 1,
    width: 95 + "%",
    height: 50,
    borderRadius: 10,
    marginLeft: 1,
    marginTop: 5,
    backgroundColor: "#c4c4c4",
  },
  input: {
    borderWidth: 1,
    width: 97 + "%",
    height: 40,
    borderRadius: 10,
    marginBottom: 5,
    marginLeft: 5,
    backgroundColor: "#c4c4c4",
    color: "#074db5",
    textAlign: "center",
  },
  txt: {
    color: "lightgray",
    fontSize: 50,
    textAlign: "center",
    marginTop: 30,
  },
  picker: {
    backgroundColor: "#c4c4c4",
    width: 70 + "%",
    height: 5 + "%",
    alignSelf: "center",
    marginTop: 2 + "%",
    marginBottom: 2 + "%",
    color: "white",
    borderRadius: 15,
  },
  imgC: {
    width: 40,
    height: 40,
  },
  imgC2: {
    width: 25,
    height: 45,
  },
  spriteSt: {
    justifyContent: "center",
    flex: 1,
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  shinyBtt: {
    position: "absolute",
    left: 6 + "%",
    borderRadius: 15,
    borderWidth: 1,
    padding: 5,
    backgroundColor: "#c4c4c4",
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2 + "%",
    marginTop: 2 + "%",
  },
  save: {
    backgroundColor: "#30c255",
    width: 30 + "%",
    borderRadius: 15,
    marginRight: 2 + "%",
  },
  delete: {
    backgroundColor: "#ff3530",
    width: 30 + "%",
    borderRadius: 15,
    marginLeft: 2 + "%",
  },
});
