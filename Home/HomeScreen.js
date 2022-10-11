import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, BackHandler, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function HomeScreen({ navigation }){

return(
<View style={styles.container}>
    <Image source={require('./Logo.png')} style={styles.img}/>
    <TouchableOpacity style={styles.btt1} onPress={()=> navigation.navigate('Time1')}> 
      <Text style={{fontSize:40,color:'#ffe031',textAlign:'center',marginTop:5}}>Time 1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btt} onPress={()=> navigation.navigate('Time2')}> 
      <Text style={{fontSize:40,color:'#ffe031',textAlign:'center',marginTop:5}}>Time 2</Text>
    </TouchableOpacity> 
    <TouchableOpacity style={styles.btt} onPress={()=> navigation.navigate('Time3')}> 
      <Text style={{fontSize:40,color:'#ffe031',textAlign:'center',marginTop:5}}>Time 3</Text>
    </TouchableOpacity> 
    <TouchableOpacity style={styles.btt} onPress={()=> navigation.navigate('Time4')}> 
      <Text style={{fontSize:40,color:'#ffe031',textAlign:'center',marginTop:5}}>Time 4</Text>
    </TouchableOpacity> 
    <TouchableOpacity style={styles.btt} onPress={()=> navigation.navigate('Time5')}> 
      <Text style={{fontSize:40,color:'#ffe031',textAlign:'center',marginTop:5}}>Time 5</Text>
    </TouchableOpacity>  
    <TouchableOpacity style={styles.btt2} onPress={()=> BackHandler.exitApp()}>
      <Text style={{fontSize:60,color:'#ffffff',textAlign:'center',marginTop:6}}>Sair</Text>
    </TouchableOpacity>
</View>
);
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#303030',
  },
  txt:{
    color:'lightgray',
    fontSize:50,
    textAlign:'center',
    marginTop:30
  },
  btt:{
    width:300,
    height:70,
    backgroundColor:'#396bba',
    borderRadius:45,
    marginTop:5+'%',
    alignSelf:'center',
  },
    btt1:{
    width:300,
    height:70,
    backgroundColor:'#396bba',
    borderRadius:45,
    marginTop:15+'%',
    alignSelf:'center',
  },
  btt2:{
    width:300,
    height:100,
    backgroundColor:'#ff5050',
    borderRadius:45,
    marginTop:5+'%',
    alignSelf:'center',
  },
  img:{
    width:100+'%',
    height:15+'%',
    marginTop:10+'%'
  },
});