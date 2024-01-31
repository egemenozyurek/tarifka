import React from "react";
import {View,Text,ImageBackground,TouchableWithoutFeedback} from "react-native"
import styles from "./MealsCard.style"
function DetailCard({meals,onSelect}){
 return(
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <ImageBackground source={{uri:meals.strMealThumb}} style={styles.image}>
            <Text style={styles.title}>{meals.strMeal}</Text>
            </ImageBackground>
        </View>
    </TouchableWithoutFeedback>
  
 )
}

export default DetailCard