import {View,Text,StyleSheet} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'

const dish = restaurants[0].dishes[0];

const DishDetailsScreen  = ()=>{
    return(
        <View>
            <Text>Dish  Detail</Text>
        </View>
    )
}
const styles = StyleSheet.create({});
export default DishDetailsScreen;