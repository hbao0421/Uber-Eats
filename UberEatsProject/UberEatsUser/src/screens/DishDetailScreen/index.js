import {View,Text,StyleSheet,Pressable} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import {AntDesign} from "@expo/vector-icons"
import { useState } from 'react';
import {useNavigation} from "@react-navigation/native";

const dish = restaurants[0].dishes[0];

const DishDetailsScreen  = ()=>{
    const [quantity,setQuantity]=  useState(1);
    const navigation = useNavigation();
    const onMinus = ()=>{
        if(quantity===1){
            return;
        }
        setQuantity(quantity-1);
    }
    const onPlus = ()=>{
        setQuantity(quantity+1);
    }

    const getTotal = ()=>{
        return (dish.price * quantity).toFixed(2);
    }
    return(
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.seperator}></View>
            <View style={styles.row}>
                <AntDesign name='minuscircleo' size={60} color={"black"} onPress={onMinus} />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name='pluscircleo' size={60} color={"black"} onPress={onPlus}/>
            </View>
            <Pressable onPress={()=>navigation.navigate('Basket')} style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} to basket (${getTotal()})</Text>
            </Pressable>
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
        fontSize:30,
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
        justifyContent:"center",
        marginTop:50,
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
    }
});
export default DishDetailsScreen;