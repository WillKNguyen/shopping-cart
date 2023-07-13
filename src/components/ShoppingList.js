import Banner from "./Banner";
import plantList from "../data/plantList";
import Item from "./Item";
import { useState } from "react";
import Categories from "./Categories";
import React from "react"
import Footer from "./Footer";

function ShoppingList(){

    const [selectedCat, setCat] = useState(null)
    //find all the categories in the data
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    return (
        <React.Fragment>
            <Banner></Banner>
            <Categories setCat={setCat} categories={categories} selectedCat={selectedCat}></Categories>
            
            <ul className="plant-list">
                {plantList.map((plant) => { 
                    if (selectedCat) {
                        if (plant.category === selectedCat){
                            return(
                                <Item key={plant.id} name={plant.name} price={plant.price}
                                light={plant.light} water={plant.water} cover={plant.cover}/>
                            )
                        }
                    }
                    else {
                        return(
                            <Item key={plant.id} name={plant.name} price={plant.price}
                                light={plant.light} water={plant.water} cover={plant.cover}/>
                        )
                    }
                })}
            </ul>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default ShoppingList