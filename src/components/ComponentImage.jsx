import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function ComponentImage() {
    const link = "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"

  return (
    <View>
        <Image
            source={{uri:link}}
            style={{ width: 300, height: 250 }}
            resizeMode='contain'
            
        />  
    </View>
  );
}
