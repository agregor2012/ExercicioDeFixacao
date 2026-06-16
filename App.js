import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ComponentButton from './src/components/ComponentButton';
import ComponentImage from './src/components/ComponentImage';
import { useState } from 'react';

export default function ExercicioDeFixacao() {

  return (
    <View style={styles.container}>

      <ComponentImage />
     
      <StatusBar style="auto" />


      <ComponentButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    alignItems: "center"
  }
});
