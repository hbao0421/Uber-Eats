import {View,FlatList} from 'react-native';
import restaurants from "../../../assets/data/restaurants.json";
import {Ionicons} from "@expo/vector-icons"
import DishListItem from '../../components/DishListItem';
import Header from './Header';
import styles from './style';
import {useRoute} from '@react-navigation/native'
const restaurant = restaurants[0];
const ResaurantDetailsPage = ()=>{
    const route = useRoute();
    const id = route.params.id;
    console.warn(id);

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