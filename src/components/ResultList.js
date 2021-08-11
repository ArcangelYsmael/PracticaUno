import React from "react";
import { View,Text,StyleSheet,Image,FlatList } from "react-native";
import SingleResult from "./SingleResult";

const ResultList = ({title,res})=>{
    if(res==null)return null;
    return (
        <View style={{marginLeft:5}}>
            <Text style={style.title}>{title}</Text>
            <FlatList
                horizontal
                data={res}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item})=>{
                    console.log(item);
                        return <SingleResult item={item}/>                   
                }}
            />
        </View>
    );
};

const style=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:"bold",
    }
});


export default ResultList;