import React from "react";
import {Text,Image,View,StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from 'react-navigation';
import Cart from "./Cart";

const SingleResult=({item,navigation})=>{
    return(
        <TouchableOpacity
            //style={}
            onPress={()=>{
                navigation.navigate("Detail",{id:item.id})
            }}
        >    
            <Cart item={item}/>
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
   
})
export default withNavigation(SingleResult);