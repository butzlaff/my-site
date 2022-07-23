import React, { useEffect, useState } from "react";
import DescriptionWithLink from "../shared/description_with_links";
import GrayImg from "../shared/gray_img";
import Form from './form'
import { useParams, useNavigate } from 'react-router-dom';



async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data;
}

const Planet = () => {

    document.body.style.marginLeft = '10%'
    document.body.style.marginRight = '10%'

    const [satellites, setSattelites] = useState([])
    const [planet, setPlanet] = useState({})
    let { id } = useParams();
    let history = useNavigate();

    useEffect(() => {
        document.body.style.marginLeft = '4rem';
        document.body.style.marginRight = '4rem';

        getPlanet(id).then(data => {
            setSattelites(data['satellites'])
            setPlanet(data['data'])
        })
    }, [id])


    let title = <h4><u>{planet.name}</u></h4>

    const goToHome = () => {
        history('/')
    }


    const addSattelites = (new_sattelite) => {
        setSattelites([...satellites, new_sattelite])
    }

    return (

        <div>            
            {title}
            <br />
            <DescriptionWithLink description={planet.description} link={planet.link} />
            <GrayImg img_url={planet.img_url} gray={planet.gray} />
            <hr />
            <Form class="fields" addSattelites={addSattelites}>
            </Form>
            <h4><b>Satellites:</b></h4>
            <br />
            <ul>
                {satellites.map((satellite, index) =>
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr />
            <button type='button' onClick={goToHome}>Voltar</button>
        </div>
    )
}

export default Planet;