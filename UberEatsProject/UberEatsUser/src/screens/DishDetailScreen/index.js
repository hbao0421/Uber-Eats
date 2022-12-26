import {View,Text,StyleSheet,Pressable,ActivityIndicator} from 'react-native';

import {AntDesign} from "@expo/vector-icons"
import { useState,useEffect } from 'react';
import {useNavigation,useRoute} from "@react-navigation/native";
import { DataStore } from 'aws-amplify';
import {Dish} from '../../models';


const DishDetailsScreen  = ()=>{
    const [dish,setDish] = useState(null);
    const [quantity,setQuantity]=  useState(1);
    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params.id;

    useEffect(()=>{
        DataStore.query(Dish,id).then(setDish);
    },[])

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
    if(!dish){
        return <ActivityIndicator size="large" color='gray'/>
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