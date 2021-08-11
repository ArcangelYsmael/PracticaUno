import React from "react";
import {Text,View,StyleSheet,Image} from "react-native";

const Cart=({item})=>{
    return(
             <View style={style.cart}>
                <Image 
                    style={style.image}
                    source={{uri:item.image_url}}
                />
                <Text style={style.name}>{item.name}</Text>
                <View style={{flexDirection:"row",flex:1,justifyContent:"flex-start"}}>
                    <Text style={style.text}>Rating {item.rating}</Text>
                    <Text style={{marginLeft:8,color:"#6E85B2"}}>Reviews {item.review_count}</Text>
                </View>
            </View>
        )
}

const style=StyleSheet.create({
    image:{
        width:200,
        height:100
    },
    text:{
        color:"#6E85B2",
    },
    name:{
        fontSize:15,
        fontWeight:"bold",
    },
    cart:{
        marginVertical:5,
        marginRight:5
    }
});

export default Cart;