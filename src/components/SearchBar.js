import React from "react";
import {View,StyleSheet,Text,Image,TextInput} from "react-native";
import {Feather} from "@expo/vector-icons";

const SearchBar=({term,onTermChange,onTermSubmit})=>{
    return(
        <View style={style.Background}>
            <Feather name="search" style={style.iconStyle}/>
            <TextInput
                style={style.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                autoCapitalize="none"
                autoCorrect={false}
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
        fontSize:18,
    },
    iconStyle:{
        fontSize:25,
        alignSelf:"center",
        marginLeft:5,
    }
});

export default SearchBar;