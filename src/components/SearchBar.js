import React from "react";
import {View,StyleSheet,Text,Image,TextInput} from "react-native";
import {Feather} from "@expo/vector-icons";

const SearchBar=()=>{
    return(
        <View style={style.Background}>
            <Feather name="search" size={25} style={{marginLeft:5}}/>
            <TextInput
                style={style.inputStyle}
                placeholder="Search"
            />
        </View>
    )
};

const style=StyleSheet.create({
    Background:{
        flexDirection:"row",
        backgroundColor:"#DFDEDE",
        height:30,  
        borderRadius:10,
        width:300,
        alignSelf:"center",
        marginTop:15,
    },
    inputStyle:{
        flex:1,
        marginLeft:15,
    }
});

export default SearchBar;