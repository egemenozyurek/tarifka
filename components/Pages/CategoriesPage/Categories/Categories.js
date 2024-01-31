import React from "react";
import {FlatList} from "react-native";
import {API_URL} from "@env"
import CategoriesCard from "../CategoriesCard";
import Loading from "../../../Loading";
import Error from "../../../Error";
import useFetch from "../../../Hooks/useFetch";
const Categories =({navigation})=>{
    
    const {loading,error,userdata}= useFetch(API_URL)
    const HandleCategoriesSelect=category=>{
        navigation.navigate("Meals",{category})
    }   
    const renderCategories=({item})=>
    <CategoriesCard 
        categories={item} 
        onSelect={()=>HandleCategoriesSelect(item.strCategory)} 
    />
    
    if(loading)
    {
        return <Loading/>
    }
    
    if(error)
    {
        return <Error/>
    }
    
        return <FlatList style={{backgroundColor:"#FF6000"}} data={userdata.categories} renderItem={renderCategories}  keyExtractor={item => item.idCategory}/>
}

export default Categories