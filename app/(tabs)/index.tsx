import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return <View style={{backgroundColor: "skyblue", flex: 2, justifyContent: "space-between" }}>

  <View style={{ height: 200, width: '100%', gap: 10 }}>
    <View style={{ height: 80, backgroundColor: 'red', justifyContent : 'center' }}>
    <Text style={{
      textAlign: 'center', fontSize: 30
    }}>RÖD</Text>

    </View>

    <View style={{ height: 80, flexDirection: 'row', gap: 10 }}>
      <View style={{ backgroundColor: 'green', width: '50%' }}>
        <Text style={{marginTop : 10,marginLeft:10, fontSize : 20}}>GRÖN</Text>
      </View>
      <View style={{ backgroundColor: 'yellow', width: '50%' }}></View>
    </View>
    <View style={{ height: 40, flexDirection: 'row', gap: 10 }}>
      <View style={{ backgroundColor: 'red', width: '75%' }}></View>
      <View style={{ backgroundColor: 'black', width: '25%' }}></View>
    </View>
  </View>
  <View style={{ backgroundColor: 'orange', height: 80 }}>
    <Button title='Tryck här!'/>
  </View>

</View>

}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
