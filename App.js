import { StyleSheet, Text, View, Button, Image} from 'react-native';
import ComponentButton from './src/components/ComponentButton';
import ComponentImage from './src/components/ComponentImage';
import ComponentInput from './src/components/ComponentInput';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

export default function ExercicioDeFixacao() {

  return (
    <View style={styles.container}>

      <ComponentInput/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    alignItems: "center"
  }
});
