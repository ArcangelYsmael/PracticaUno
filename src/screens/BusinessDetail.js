import React, {useState}from "react";
import {Text,View,StyleSheet,FlatList,Image} from "react-native";
import { useEffect } from "react/cjs/react.development";
import Cart from "../components/Cart";
import yelp from "../api/yelp";


const BusinessDetail=({navigation})=>{
    const [datos,setDatos]=useState(null);
    const id= navigation.getParam('id');
    
    const searchDetail=async(id)=>{
        const response= await yelp.get(`/${id}`);
        setDatos(response.data);
       
    }
    useEffect(()=>{
        searchDetail(id);
        
    },[])

   
   if(!datos){
       return null;
   }
    return( 
        <View>
              <Text style={style.title}>{datos.name}</Text>
              <View style={{flexDirection:"row", justifyContent:"flex-start"}}>
                  <Text style={style.Text}>Rating: {datos.rating}</Text>
                  <Text style={style.Text}>Price: {datos.price}</Text>
                  <Text style={[style.Text,style.Text2]}>Phone: {datos.phone}</Text>
              </View>
              
              <FlatList
                style={style.lista}
                horizontal
                data={datos.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                 return <Image
                        style={style.image}
                        source={{uri:item}}
                    />
                }}
              />
            </View>
        )
}

const style=StyleSheet.create({
   image:{
       width:200,
       height:150,
       marginHorizontal:3,
   },
   title:{
        fontSize:16,
        fontWeight:"bold",
        alignSelf:"center",
        marginTop:10,
   },
   Text:{
        marginVertical:10,
        marginHorizontal:5,
        fontWeight:"bold",
   },
   lista:{
        alignSelf:"center",
   },
   Text2:{
        alignSelf:"flex-end",
        flex:1, 
  }
})

export default BusinessDetail;