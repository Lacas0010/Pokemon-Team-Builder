import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import { useBaseUrl } from "../hooks/useBaseUrl.js";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

const Party = [
  {
    title: "Pokémon 1",
    id: 1,
  },
  {
    title: "Pokémon 2",
    id: 2,
  },
  {
    title: "Pokémon 3",
    id: 3,
  },
  {
    title: "Pokémon 4",
    id: 4,
  },
  {
    title: "Pokémon 5",
    id: 5,
  },
  {
    title: "Pokémon 6",
    id: 6,
  },
];

const Item = ({ item }) => {
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [attack, setAttack] = useState([]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);

  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);

  const [response, setResponse] = useState({ data: { name: "" } });
  const[shiny, setShiny] = useState(false);
  let tempValues = {
    id: "",
  };

  const fetchResults = () => {
    const attackList = [];
    axios.get(`${useBaseUrl()}/pokemon/${tempValues.id}`).then((res) => {
      res.data.moves.forEach((attack, index) => {
        attackList.push({
          label: attack.move.name,
          value: index,
        });
      });
      console.log("PoNGoMoN aTAQuI", attackList);
      setAttack(attackList), setResponse(res);
    });
  };

const CondSprite = () => {
  return shiny === true ? (
    <ImageBackground
      source={require("../assets/pokeball.png")}
      style={{ height: 200, width: 200, flex: 1 }}
    >
      {response.data.sprites && (
        <Image
          style={{ height: 200, width: 200 }}
          source={{
            uri: response.data.sprites.front_shiny,
          }}
        ></Image>
      )}
    </ImageBackground>
  ) : (
    <ImageBackground
      source={require("../assets/pokeball.png")}
      style={{ height: 200, width: 200, flex: 1 }}
    >
      {response.data.sprites && (
        <Image
          style={{ height: 200, width: 200 }}
          source={{
            uri: response.data.sprites.front_default,
          }}
        ></Image>
      )}
    </ImageBackground>
  );
};

  useEffect(() => {
    console.log(response);
    console.log("PONGOMON ATAQUI", response);
  });

  return (
    <View style={styles.PkmContainer}>
      <View style={{ display: "flex", flex: 1 }}>
        <Text style={{ color: "white" }}> {item.title}</Text>
        <TextInput
          style={styles.input}
          placeholder="  Número da Dex"
          placeholderTextColor="#074db5"
          onChangeText={(value) => (tempValues.id = value)}
          onBlur={fetchResults}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="  Nome"
          placeholderTextColor="#074db5"
          value={response.data.name}
        ></TextInput>
        <View style={{ display: "flex", flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "column",
              flex: 1,
            }}
          >
            <DropDownPicker
              style={styles.atk}
              open={open1}
              value={value1}
              items={attack}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setAttack}
              placeholder="Ataque 1"
              textStyle={{ color: "#074db5" }}
              searchable={true}
              dropDownContainerStyle={{
                backgroundColor: "#c4c4c4",
                width: 95 + "%",
                alignSelf: "center",
              }}
              zIndex={4000}
              listMode="SCROLLVIEW"
              scrollViewProps={{
                nestedScrollEnabled: true,
              }}
            />
            <DropDownPicker
              style={styles.atk}
              open={open3}
              value={value3}
              items={attack}
              setOpen={setOpen3}
              setValue={setValue3}
              setItems={setAttack}
              placeholder="Ataque 3"
              textStyle={{ color: "#074db5" }}
              searchable={true}
              dropDownContainerStyle={{
                backgroundColor: "#c4c4c4",
                width: 95 + "%",
                alignSelf: "center",
              }}
              zIndex={3000}
              listMode="SCROLLVIEW"
              scrollViewProps={{
                nestedScrollEnabled: true,
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <DropDownPicker
              style={styles.atk}
              open={open2}
              value={value2}
              items={attack}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setAttack}
              placeholder="Ataque 2"
              textStyle={{ color: "#074db5" }}
              searchable={true}
              dropDownContainerStyle={{
                backgroundColor: "#c4c4c4",
                width: 95 + "%",
                alignSelf: "center",
              }}
              zIndex={4000}
              listMode="SCROLLVIEW"
              scrollViewProps={{
                nestedScrollEnabled: true,
              }}
            />
            <DropDownPicker
              style={styles.atk}
              open={open4}
              value={value4}
              items={attack}
              setOpen={setOpen4}
              setValue={setValue4}
              setItems={setAttack}
              placeholder="Ataque 4"
              textStyle={{ color: "#074db5" }}
              searchable={true}
              dropDownContainerStyle={{
                backgroundColor: "#c4c4c4",
                width: 95 + "%",
                alignSelf: "center",
              }}
              zIndex={3000}
              listMode="SCROLLVIEW"
              scrollViewProps={{
                nestedScrollEnabled: true,
              }}
            />
          </View>
        </View>
        <View style={styles.sprite}>
          <CondSprite/>          
          <TouchableOpacity onPress={() => (setShiny(prev=>!prev))} style={styles.shinyBtt}>
            <Image source={require("../assets/shinyIcon.png")} style={{width:35,height:35}}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const renderItem = ({ item }) => {
  return <Item item={item} />;
};
export default function Team() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "Pokémon Red",
      value: "Red",
      icon: () => (
        <Image source={require("../assets/RedC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Blue",
      value: "Blue",
      icon: () => (
        <Image source={require("../assets/BlueC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Green",
      value: "Green",
      icon: () => (
        <Image source={require("../assets/GreenC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Yellow",
      value: "Yellow",
      icon: () => (
        <Image source={require("../assets/YellowC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Gold",
      value: "Gold",
      icon: () => (
        <Image source={require("../assets/GoldC.png")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Silver",
      value: "Silver",
      icon: () => (
        <Image source={require("../assets/SilverC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Crystal",
      value: "Crystal",
      icon: () => (
        <Image source={require("../assets/CrystalC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Ruby",
      value: "Ruby",
      icon: () => (
        <Image source={require("../assets/RubyC.png")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Sapphire",
      value: "Sapphire",
      icon: () => (
        <Image
          source={require("../assets/SapphireC.jpg")}
          style={styles.imgC}
        />
      ),
    },
    {
      label: "Pokémon Emerald",
      value: "Emerald",
      icon: () => (
        <Image source={require("../assets/EmeraldC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Fire Red",
      value: "FireRed",
      icon: () => (
        <Image source={require("../assets/FireRedC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Leaf Green",
      value: "LeafGreen",
      icon: () => (
        <Image
          source={require("../assets/LeafGreenC.jpg")}
          style={styles.imgC}
        />
      ),
    },
    {
      label: "Pokémon Diamond",
      value: "Diamond",
      icon: () => (
        <Image source={require("../assets/DiamondC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Pearl",
      value: "Pearl",
      icon: () => (
        <Image source={require("../assets/PearlC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Platinum",
      value: "Platinum",
      icon: () => (
        <Image
          source={require("../assets/PlatinumC.jpg")}
          style={styles.imgC}
        />
      ),
    },
    {
      label: "Pokémon Heart Gold",
      value: "HeartGold",
      icon: () => (
        <Image
          source={require("../assets/HeartGoldC.jpg")}
          style={styles.imgC}
        />
      ),
    },
    {
      label: "Pokémon Soul Silver",
      value: "SoulSilver",
      icon: () => (
        <Image
          source={require("../assets/SoulSilverC.jpg")}
          style={styles.imgC}
        />
      ),
    },
    {
      label: "Pokémon Black",
      value: "Black",
      icon: () => (
        <Image source={require("../assets/BlackC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon White",
      value: "White",
      icon: () => (
        <Image source={require("../assets/WhiteC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Black 2",
      value: "Black2",
      icon: () => (
        <Image source={require("../assets/Black2C.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon White 2",
      value: "White2",
      icon: () => (
        <Image source={require("../assets/White2C.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon X",
      value: "X",
      icon: () => (
        <Image source={require("../assets/XC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Y",
      value: "Y",
      icon: () => (
        <Image source={require("../assets/YC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Omega Ruby",
      value: "OmegaRuby",
      icon: () => (
        <Image
          source={require("../assets/OmegaRubyC.jpg")}
          style={styles.imgC}
        />
      ),
    },
    {
      label: "Pokémon Alpha Sapphire",
      value: "AlphaSapphire",
      icon: () => (
        <Image
          source={require("../assets/AlphaSapphireC.jpg")}
          style={styles.imgC}
        />
      ),
    },
    {
      label: "Pokémon Sun",
      value: "Sun",
      icon: () => (
        <Image source={require("../assets/SunC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Moon",
      value: "Moon",
      icon: () => (
        <Image source={require("../assets/MoonC.jpg")} style={styles.imgC} />
      ),
    },
    {
      label: "Pokémon Ultra Sun",
      value: "UltraSun",
      icon: () => (
        <Image
          source={require("../assets/UltraSunC.jpg")}
          style={styles.imgC}
        />
      ),
    },
    {
      label: "Pokémon Ultra Moon",
      value: "UltraMoon",
      icon: () => (
        <Image
          source={require("../assets/UltraMoonC.jpg")}
          style={styles.imgC}
        />
      ),
    },
    {
      label: "Pokémon Let's Go Pikachu",
      value: "LetsGoP",
      icon: () => (
        <Image
          source={require("../assets/LetsGoPC.jpg")}
          style={styles.imgC2}
        />
      ),
    },
    {
      label: "Pokémon Let's Go Eevee",
      value: "LetsGoE",
      icon: () => (
        <Image
          source={require("../assets/LetsGoEC.jpg")}
          style={styles.imgC2}
        />
      ),
    },
    {
      label: "Pokémon Sword",
      value: "Sword",
      icon: () => (
        <Image source={require("../assets/SwordC.jpg")} style={styles.imgC2} />
      ),
    },
    {
      label: "Pokémon Shield",
      value: "Shield",
      icon: () => (
        <Image source={require("../assets/ShieldC.jpg")} style={styles.imgC2} />
      ),
    },
    {
      label: "Brilliant Diamond",
      value: "BrilliantDiamond",
      icon: () => (
        <Image
          source={require("../assets/BrilliantDiamondC.jpg")}
          style={styles.imgC2}
        />
      ),
    },
    {
      label: "Pokémon Shining Pearl",
      value: "ShiningPearl",
      icon: () => (
        <Image
          source={require("../assets/ShiningPearlC.jpg")}
          style={styles.imgC2}
        />
      ),
    },
    {
      label: "Pokémon Legends: Arceus",
      value: "LegendsArceus",
      icon: () => (
        <Image
          source={require("../assets/LegendsArceusC.jpg")}
          style={styles.imgC2}
        />
      ),
    },
  ]);
  return (
    <View style={styles.container}>
      <DropDownPicker
        style={styles.picker}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
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
      <FlatList
        data={Party}
        renderItem={renderItem}
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
  sprite: {
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
});
