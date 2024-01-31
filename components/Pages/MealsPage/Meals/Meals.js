import React from "react";
import {FlatList } from "react-native";
import useFetch from "../../../Hooks/useFetch";
import MealCard from "../MealsCard/MealsCard";
import Loading from "../../../Loading/loading";
import Error from "../../../Error/error";
const Meals =({route,navigation})=>{

    const categories=route.params.category
    const {loading,error,userdata}=useFetch(API_categoryURL+`${categories}`)
    
    const HandleCategoriesSelect=meals=>{
        navigation.navigate("Details",{meals})
    }

    const renderMeals=({item})=><MealCard meals={item} onSelect={()=>HandleCategoriesSelect(item.strMeal)}/>

    if(loading)
    {
        return <Loading/>
    }
    
    if(error)
    {
        return <Error/>
    }

    return <FlatList style={{backgroundColor:"#FF6000"}} data={userdata.meals} renderItem={renderMeals}  keyExtractor={item => item.idMeal}/>
}

export default Meals