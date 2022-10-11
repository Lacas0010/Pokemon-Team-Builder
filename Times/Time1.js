import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, Image  } from 'react-native';
import {useBaseUrl} from '../hooks/useBaseUrl.js';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';

const Party = [
  {
    title:'Pokémon 1',
    id:1
  },
    {
    title:'Pokémon 2',
    id:2
  },
    {
    title:'Pokémon 3',
    id:3
  },
    {
    title:'Pokémon 4',
    id:4
  },
    {
    title:'Pokémon 5',
    id:5
  },
    {
    title:'Pokémon 6',
    id:6
  }
];

  const renderItem = ({ item }) => {
    return (
    <View style={styles.PkmContainer}>
    <View>
    <Text style={{color:'white'}}> {item.title}</Text>
    <TextInput style={styles.input} placeholder='  Número da Dex' placeholderTextColor='#074db5'></TextInput> 
    <TextInput style={styles.input} placeholder='  Nome' placeholderTextColor='#074db5'></TextInput>
    <View>
    <View style={{flexDirection:'row'}}> 
    <TextInput style={styles.atk} placeholder='Ataque 1' placeholderTextColor='#074db5'></TextInput>
    <TextInput style={styles.atk} placeholder='Ataque 2' placeholderTextColor='#074db5'></TextInput>
    </View> 
    <View style={{flexDirection:'row', marginBottom:7}}> 
    <TextInput style={styles.atk} placeholder='Ataque 3' placeholderTextColor='#074db5'></TextInput>
    <TextInput style={styles.atk} placeholder='Ataque 4' placeholderTextColor='#074db5'></TextInput>
    </View> 
    </View>
    </View>
    </View> 
    )
  };

export default function Team(){
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Red', value: 'Red',icon: () => <Image source={require('../assets/RedC.jpg')} style={styles.iconStyle} />},
    {label: 'Blue', value: 'Blue'},
    {label:'Green', value:'Green'},
    {label:'Yellow', value:'Yellow'}

  ]);
  return(
<View style={styles.container}>
  <DropDownPicker
      style={styles.picker}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
{/* <Text style={styles.txt}>Time 1</Text> */}
      <FlatList
        data={Party}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatlist}
      />
</View>
);
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#303030',
  },
   flatlist:{
    width: 100 + "%",
    paddingHorizontal: 20
  },
  PkmContainer:{
    borderWidth:5,
    padding:3,
    marginTop:5,
    marginBottom:3,
    borderRadius:10,
    width:100 + '%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#585959'
  },
  atk:{
    borderWidth:1,
    width:48+'%',
    height:50,
    borderRadius:10,
    marginLeft:5,
    marginTop:5,
    backgroundColor:'#c4c4c4',
    color:'#074db5'
  },
  input:{
    borderWidth:1,
    width:97+'%',
    height:40,
    borderRadius:10,
    marginBottom:5,
    marginLeft:5,
    backgroundColor:'#c4c4c4',
    color:'#074db5'
  },
  txt:{
    color:'lightgray',
    fontSize:50,
    textAlign:'center',
    marginTop:30
  },
  picker:{
    backgroundColor:'#909090',
    width:50+'%',
    height:5+'%',
    marginLeft:25+'%',
    marginTop:2+'%',
    marginBottom:2+'%',
    color:'white',
    borderRadius:15
  },
  iconStyle:{
    width:0.5+'%',
    height:0.5+'%'
  }
});