import {View,FlatList} from 'react-native';
import restaurants from "../../../assets/data/restaurants.json";
import {Ionicons} from "@expo/vector-icons"
import DishListItem from '../../components/DishListItem';
import Header from './Header';
import styles from './style';
const restaurant = restaurants[0];
const ResaurantDetailsPage = ()=>{
    return(
        <View style={styles.page}>    
            <FlatList 
            ListHeaderComponent={() =><Header restaurant={restaurant}/>} 
            data={restaurant.dishes} 
            renderItem={({item}) =><DishListItem dish={item}/>}>
            </FlatList>
            <Ionicons
            name='arrow-back-circle'
            size={45}
            color="white"
            style={styles.iconContainer}/>  

        </View>
    )
}


export default ResaurantDetailsPage;