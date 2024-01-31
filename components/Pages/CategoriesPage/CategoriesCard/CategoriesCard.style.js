import {StyleSheet,Dimensions} from "react-native"

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        margin:5,
        paddingLeft:20,
        flex:1,
        flexDirection:"row",
        borderColor:"grey",
        borderWidth:1.5,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius:50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    image:{
        minHeight:Dimensions.get('window').height/7,
        minWidth:Dimensions.get('window').width/3,
        resizeMode:"center"
    },
    title:{
        textAlignVertical:"center",
        fontWeight:"bold",
        fontSize:15,
        color:"#2D2727"
    }
})