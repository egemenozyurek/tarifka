import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from "./components/Pages/CategoriesPage/Categories/Categories";
import Meals from "./components/Pages/MealsPage/Meals/Meals";
import Details from "./components/Pages/DetailsPage/Details/Details";

function App(){
  const Stack=createNativeStackNavigator()
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
       name="Categories" 
       component={Categories} 
       options={{
                headerTitleStyle:{color:"#FFA559"},
                headerTintColor:"white"
                }}
      />
      <Stack.Screen 
       name="Meals" 
       component={Meals}
       options={{
        headerTitleStyle:{color:"#FFA559"},
        headerTintColor:"#FFA559"
        }}
      />

      <Stack.Screen 
        name="Details" 
        component={Details}
        options={{
         headerTitleStyle:{color:"#FFA559"},
         headerTintColor:"#FFA559"
         }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App