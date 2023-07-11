import React from "react";
import Banner from "./Banner";

function App(){
    return(
        <React.Fragment>
            <Banner></Banner>
            <div className="greetings">
                <div>
                    <div>Welcome to PlantPlanet, a whole new world where botanical wonders flourish and green dreams come true!</div>
                    <button>Shop Now</button>
                </div>
                <img></img>
            </div>
        </React.Fragment>
    )
}

export default App