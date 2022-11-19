import React from "react";
import {Image, StyleSheet} from "react-native";

export const games = () => [
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
    label: "Pokémon Brilliant Diamond",
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
]

const styles = StyleSheet.create({
  imgC: {
    width: 40,
    height: 40,
  },
  imgC2: {
    width: 25,
    height: 45,
  }
})
