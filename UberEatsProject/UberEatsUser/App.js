import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ResaurantDetaisScreen from './src/screens/RestaurantDetailScreen';
import DishDetailsScreen from './src/screens/DishDetailScreen';
import Basket from './src/screens/Basket';
import OrderScreen from './src/screens/OdersScreen';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <ResaurantDetaisScreen/> */}
      {/* <HomeScreen/> */}
      {/* <DishDetailsScreen/> */}
      <OrderScreen/>
      <StatusBar style="Light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding:10,
    // paddingVertical:30,
  },
});
