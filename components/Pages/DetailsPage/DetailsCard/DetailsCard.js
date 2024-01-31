import { Text, View,Image,Linking,Pressable } from 'react-native'
import React from 'react'
import styles from "./DetailsCard.style"

function DetailsCard({meals}) {
    
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:meals.strMealThumb}}/>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{meals.strMeal}</Text>
          <Text style={styles.text}>{meals.strArea}</Text>
        </View>
        <Text style={styles.textIntruction}>{meals.strInstructions}</Text>
        <Pressable style={styles.button} onPress={()=>{Linking.openURL(meals.strYoutube)}}>
          <Text style={styles.buttonText}>Watch on Youtube</Text>
        </Pressable> 
      </View>
    )
  
}

export default DetailsCard