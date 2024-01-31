import React from "react"
import {StyleSheet,Dimensions} from "react-native"

export default StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        height:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width,
    },
    titleContainer:{
        borderBottomWidth:1.5,
        borderColor:"grey",
        paddingVertical:5,
        paddingLeft:5
    },
    text:{
        color:"#990000",
        fontSize:17,
        fontWeight:"bold",
    },
    textIntruction:{
        fontWeight:"bold",
        paddingLeft:5
    },
    button:{
        backgroundColor:"red",
        padding:5,
        borderRadius:5,
        marginHorizontal:10,        
    },
    buttonText:{
        color:"white",
        textAlign:"center"
    }
})