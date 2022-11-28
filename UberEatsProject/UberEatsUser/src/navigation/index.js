import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ResaurantDetaisScreen from '../screens/RestaurantDetailScreen';
import DishDetailsScreen from '../screens/DishDetailScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OdersScreen';
import OrderDetails from '../screens/OrderDetails';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RootNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Restaurant' component={ResaurantDetaisScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default RootNavigator;