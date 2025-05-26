import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/AppContext';

const Searchbycategory = (category) => {
    const { getalldata } = useContext(AppContext);
    const [worker,setWorker] = useState([]);

    useEffect(()=>{
     if(getalldata && category){
        console.log("enter if")
        const filteredworker = getalldata.filter( 
            (worker)=> getalldata?.category?.toLowercase()
        )
     }
    })
  return (
   <>
   
   </>
  )
}

export default Searchbycategory