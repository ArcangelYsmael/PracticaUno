import React,{useState} from "react";
import {View,StyleSheet,Text,ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useApiResults from "../hooks/useApiResults";
import ResultList from "../components/ResultList";


const SearchScreen=()=>{
    const [term,setTerm]=useState("");
    const [SearchApi,errorMesage,results]=useApiResults();
    
    const filterResultByPrice=(price)=>{
        return results.filter(result=>{
            return result.price===price;
        });
    };
    return(
        <ScrollView >
        <View> 
            <SearchBar 
                term={term} 
                onTermChange={(newTerm)=>setTerm(newTerm)}
                onTermSubmit={()=>SearchApi(term)}
                />
            {errorMesage?<Text>{errorMesage}</Text>:null}
            <Text>we have found {results.length} results</Text>  
            <ResultList res={filterResultByPrice("€")} title="Cost Effective"/> 
            <ResultList res={filterResultByPrice("€€")} title="Bit Pricier"/> 
            <ResultList res={filterResultByPrice("€€€")} title="Big Spender"/>        
        </View>
        </ScrollView>
    )
};

const style=StyleSheet.create({
   
});

export default SearchScreen;