import { StyleSheet } from "react-native";
export default StyleSheet.create({
    page:{
        flex:1,
    },
    iconContainer:{
        position:"absolute",
        top:40,
        left:10,
    },
    image:{
        width:"100%",
        aspectRatio:4/3,
    },
    title:{
        fontSize:35,
        fontWeight:"600",
        marginVertical:10,
        margin:10
    },
    subtitle:{
        fontSize:15,
        color:'#525252',
    },
    container:{
        margin:10,
    },
    menuTitle:{
        marginVertical:10,
        fontSize:16,
        letterSpacing:0.7
    }
});