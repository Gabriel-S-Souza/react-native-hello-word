import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonApp, { ButtonAppClass } from './src/components/Button-App';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Ola mundo!</Text>      
      <ButtonApp texto={"Botão Componente Funcional"} />
      <View style={{padding: 10}} />
      <ButtonAppClass texto={"Botão Componente de Classe"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // vertical
    justifyContent: 'center', // horizontal
  },
  text: {
    color: 'red',
    paddingBottom: 16,
  },
});
