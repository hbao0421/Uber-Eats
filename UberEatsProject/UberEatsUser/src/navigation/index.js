import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ResaurantDetaisScreen from '../screens/RestaurantDetailScreen';
import DishDetailsScreen from '../screens/DishDetailScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OdersScreen';
import OrderDetails from '../screens/OrderDetails';
import ProfileScreen from '../screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Foundation,FontAwesome5,MaterialIcons} from '@expo/vector-icons';
import { useAuthContext } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

const RootNavigator = ()=>{
    const {dbUser} = useAuthContext();
    return(
        <Stack.Navigator initialRouteName="Home Tabs" screenOptions={{headerShown:false}}>
            {dbUser?(<Stack.Screen name='Home Tabs' component={HomeTabs}/>):(<Stack.Screen name='Profile' component={ProfileScreen}/>)}
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();
const HomeTabs = ()=>{
    return(
        <Tab.Navigator barStyle={{backgroundColor:"white"}}>
            <Tab.Screen screenOptions={{headerShown:false}} name='Home' component={HomeStackNavigator} options={{tabBarIcon:({color})=><Foundation name='home' size={24} color={color}/> }}/>
            <Tab.Screen name='Orders' component={OrdersStackNavigator} options={{tabBarIcon:({color})=><MaterialIcons name='list-alt' size={24} color={color}/>}}/>
            <Tab.Screen name='Profile' component={ProfileScreen} options={{tabBarIcon:({color})=><FontAwesome5 name='user-alt' size={24} color={color}/>}}/>
        </Tab.Navigator>
    );
}

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = ()=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Restaurants' component={HomeScreen}/>
            <HomeStack.Screen name='Restaurant' component={ResaurantDetaisScreen} options={{headerShown:false}}/>
            <HomeStack.Screen name='Dish' component={DishDetailsScreen}  />
            <HomeStack.Screen name='Basket' component={Basket}/>
        </HomeStack.Navigator>
    );
}

const OrdersStack = createNativeStackNavigator();
const OrdersStackNavigator = ()=>{
    return(
        <OrdersStack.Navigator>
            <OrdersStack.Screen name='OrdersStack' component={OrderScreen}/>
            <OrdersStack.Screen name='Order' component={OrderDetails}/>

        </OrdersStack.Navigator>
    );
}
export default RootNavigator;