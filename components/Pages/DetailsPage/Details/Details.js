import React from "react";
import { View,Text,FlatList } from "react-native";
import useFetch from "../../../Hooks/useFetch"; 
import DetailsCard from "../DetailsCard/DetailsCard"
import Loading from "../../../Loading/loading";
import Error from "../../../Error/error";

const Details =({route})=>{
    const detail=route.params.meals
    const {loading,error,userdata}=useFetch(API_mealsURL+`${detail}`)
    
    const renderMeals=({item})=><DetailsCard meals={item}/>
    if(loading)
    {
        return <Loading/>
    }
    
    if(error)
    {
        return <Error/>
    }

    return <FlatList data={userdata.meals} renderItem={renderMeals}  keyExtractor={item => item.idMeal}/>
}

export default Details