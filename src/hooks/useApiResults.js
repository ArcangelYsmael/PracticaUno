import { useState,useEffect } from "react";
import yelp from "../api/yelp";

export default()=>{
    const [results,setResults]=useState([]);
    const [errorMesage,setErrorMesage]=useState("");

    const SearchApi= async searchTerm=>{
       try {const response=await yelp.get("/search",{
            params:{
                limit:50,
                term:searchTerm,
                location:'Madrid'
            }
        });
        setResults(response.data.businesses);
        setErrorMesage("");
        console.log(results);
        }
        catch(e){
            setErrorMesage("something went wrong! :(   "+e)
        }
    };

    useEffect(()=>{
        SearchApi("pasta");
    },[]);
    return [SearchApi,errorMesage,results];
};