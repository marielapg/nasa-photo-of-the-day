import React, { useState, useEffect } from "react";
import axios from "axios";
import AstroCard from "./AstroCard";


function Astro(){
    const [planet, setPlanet] = useState("");
    const [date, setDate] = useState ("2019-11-07")
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=Ja4KQ9fagCmvzBJ51K8GqDCQiUF4c9H8F45QlK2H")
            .then(response => {
            setPlanet(response.data);
            console.log("response data:", response.data);
        })
        .catch(error => {
            console.log("data was not returned", error);
        });
        }, []);


    return (
        <div className="container">
            <AstroCard
                title = {planet.title}
                url = {planet.url}
                date = {planet.date}
                explanation = {planet.explanation}
                copyright = {planet.copyright}

            />
        </div>
    )
}

export default Astro;