import {View,Text,StyleSheet,FlatList} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'

const restaurant = restaurants[0];

const BasketDishItem = ({basketDish})=>{
    return(
        <View style={styles.row}>
        <View style={styles.quantityContainer}>
            <Text>1</Text>
        </View>
            <Text style={{fontWeight:"600"}}>{basketDish.name}</Text>
            <Text style={{marginLeft:"auto"}}>${basketDish.price}</Text>
    </View>
    );
}

const Basket  = ()=>{
    return(
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={{fontWeight:"bold",marginTop:20}}>Your items</Text>
            <FlatList 
            data={restaurant.dishes} 
            renderItem={({item})=><BasketDishItem basketDish={item}/>}
            ></FlatList>

            <View style={styles.seperator}></View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Create Order</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    page:{
        flex:1,
        width:"100%",
        paddingVertical:40,
        padding:10,
    },
    name:{
        fontSize:24,
        fontWeight:"600",
        marginVertical:10,

    },
    description:{
        color:"grey"
    },
    seperator:{
        height:1,
        backgroundColor:"lightgrey",
        marginVertical:10,
    },
    row:{
        flexDirection:"row",
        alignItems:'center',
        marginVertical:15,
    },
    quantity:{
        fontSize:25,
        fontWeight:"bold",
        marginHorizontal:20,
    },
    button:{
        backgroundColor:"black",
        marginTop:"auto",
        padding:20,
        alignItems:"center"
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:18,
    },
    quantityContainer:{
        backgroundColor:"lightgrey",
        paddingHorizontal:5,
        marginRight:10,
        paddingVertical:2,
        borderRadius:3
    }
});
export default Basket;