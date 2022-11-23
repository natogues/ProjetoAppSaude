import { StatusBar } from 'expo-status-bar';
import React, { startTransition } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import fototeste from './assets/ico_printer.png';

export default function App() {

  const variavel = 5;
  const x = ( variavel + 1);


  return (
    <View style={styles.container}>
      <Text style={styles.textocor}>texto de aberturas</Text>
      <Text>{variavel} - {x}</Text>
      <View>
        <Image source={fototeste}></Image>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32CD32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textocor: {
    color: '#000000',
    fontSize: 18,
  }
});
