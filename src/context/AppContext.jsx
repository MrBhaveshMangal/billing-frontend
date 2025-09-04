import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../Service/categoryService";

export const AppContext =createContext(null);  

export const AppContextProvider=(props)=>{

    const [categories,setCategories]=useState([]);
    // const [categories,setCategories]=useState([]);


useEffect(() => {
  async function loaddata() {
    const response = await fetchCategories();
    setCategories(response.data);
  }
  loaddata();
}, []);   // <- empty array lagao

    const contextValue={
        categories,
        setCategories

    }

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
}