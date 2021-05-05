import React from "react";
import SlideRight from "../components/Slideright";
import SlideLeft from "../components/Slideleft";
import SlideDown from "../components/Slidedown";
import SlideUp from "../components/Slideup";

function Home (){
    return(
        <div className="text-white">
        <SlideRight />
        <SlideLeft />
        <SlideDown />
        <SlideUp />
        
        </div>
        )
}

export default Home;