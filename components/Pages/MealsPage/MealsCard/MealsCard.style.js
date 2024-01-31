import {StyleSheet,Dimensions} from "react-native"

export default StyleSheet.create({
    container:{
        margin:5,
        flex:1, 
    },
    image:{
        minHeight:Dimensions.get('window').height/7,
        minWidth:Dimensions.get('window').width/3,
        justifyContent:"flex-end",
        resizeMode:"cover",
        overflow: 'hidden',
        borderRadius:15
    },
    title:{
        color: 'white',
        lineHeight: 15,
        fontWeight: 'bold',
        textAlign:"center",
        backgroundColor: '#000000c0',
    }
})