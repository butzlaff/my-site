import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./form";
import Navbar from "../navbar";

async function getPlanets() {
    let response = await fetch("http://localhost:3000/api/planets.json")
    let data = await response.json()
    return data;
}

const Planets = () => {

    document.body.style.marginLeft = '10%'
    document.body.style.marginRight = '10%'

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }

    return (
        <Fragment>
            <Navbar />
            <hr />
            <h1><b>Planets List</b></h1>
            <hr />
            <Form class="field" addPlanet={addPlanet}></Form>
            <hr />
            {planets.map((planet, index) =>
                <Planet
                    key={index}
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                />
            )}
        </Fragment>
    )
}

export default Planets;