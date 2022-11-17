import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = ()=>{
  return(
    <View style = {styles.retaurantContainer}>
    <Image 
    source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg'}}
    style={styles.image}
    />
    <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
    <Text style={styles.subtitle}>$ 1.99 15-30 minutes</Text>
  </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantItem/>
      <RestaurantItem/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  retaurantContainer:{
    width:'100%',
    marginVertical:10,
  },
  image:{
    width: "100%",
    aspectRatio:5/3,
    marginVertical:5,
  },
  title:{
    fontSize:18,
    fontWeight:"bold",
    marginVertical:5,
  },
  subtitle:{
    color:"grey",
  },
});
