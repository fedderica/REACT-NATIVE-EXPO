import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Image, ImageBackground } from 'react-native';
 import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
 const { width, height } = Dimensions.get('window')
 import { Asset } from "expo-asset";





export default function App() {
  return (

 

    <View style={styles.container}>
      
      <Text style={styles.titulo}>         I'M FEDERICA   </Text>
      <Text style={styles.subTitle}>  THIS IS MY APP  </Text>
      
    

       <TextInput
       placeholder="fedderica.bartoli@gmail.com"
       style={styles.textInput} 
       />
        <TextInput
       placeholder="2216275798"
       style={styles.textInput} 
       />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "pink",
  },

textInput: {
  borderWidth: 1,
  paddingStart: 30,
  padding: 10,
  width: '90%',
  height: 50,
  marginTop: 20,
  borderRadius: 30,
  backgroundColor: '#fff',
},

image: {
  width: 900,
  height: 900,
  flex: 1,

},
});
