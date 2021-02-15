import React from "react";
import {View,StyleSheet,Text,Image} from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen=()=>{
    return(
        <View>
            <SearchBar/>
            <Text>Search screen</Text>           
        </View>
    )
};

const style=StyleSheet.create({
   
});

export default SearchScreen;