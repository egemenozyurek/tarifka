import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import styles from "./CategoriesCard.style"

const CategoriesCard = ({categories,onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
        <View>
            <Image style={styles.image} source={{uri:categories.strCategoryThumb}}/>
            <Text style={styles.title}>{categories.strCategory}</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default CategoriesCard