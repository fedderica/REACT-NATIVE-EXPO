import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
 import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
 const { width, height } = Dimensions.get('window')


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Hola AYMI  </Text>
      <Text style={styles.subTitle}> LOADING </Text>
       <TextInput
       placeholder="fedderica.bartoli@gmail.com"
       style={styles.textInput} 
       />
        <TextInput
       placeholder="password"
       style={styles.textInput} 
       />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 80,
    color: "#34434D",
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
  width: '80%',
  height: 50,
  marginTop: 20,
  borderRadius: 30,
  backgroundColor: '#fff',
}


});