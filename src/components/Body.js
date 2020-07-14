import React, { useState, useEffect } from 'react';

function Body(props){

    const[items, setitems]=useState([])

    useEffect(()=>{
        fetch('https://themealdb.com/api/json/v1/1/filter.php?a=Canadian')
        .then(response=>response.json())
        .then(data=>{
            // console.log(data)
            // we have to store the json data into the empty array so that we can loop throug it with the map function
            
            setitems(data.meals)
            
        }) 

    }, []);

        // to loop through the items

        const itemslist=items.map(item=>{
            return(
                <div >
                    <div className="row">
                        <div className="col-md-4 m-5">
                            <p>{item.strMeal} </p>
                            <img src={item.strMealThumb} alt="images" />
                            <p>{item.idMeal}</p>
                                
                        </div>
                    </div>
                </div>
               
            )
        })


    return(
        <div>
             
             
             <div className="row mt-5">
                {itemslist}
             </div>
            
             
        </div>
    )
}

export default Body