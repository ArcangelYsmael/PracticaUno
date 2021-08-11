import React, {useState}from "react";
import {Text,View,StyleSheet,FlatList} from "react-native";
import { useEffect } from "react/cjs/react.development";
import Cart from "../components/Cart";
import yelp from "../api/yelp";


const BusinessDetail=({navigation})=>{
    const [Data,setData]=useState(null);
    const id= navigation.getParam('id');
    
    const searchDetail=async(id)=>{
        const response= await yelp.get(`/${id}`);
        setData(response.data);
    }
    useEffect(()=>{
        searchDetail(id);
    },[])

   
   
    return(
            <View>
                <Cart item={Data}/>
            </View>
        )
}

export default BusinessDetail;