import React from "react";
import DescriptionWithLink from "../../shared/description_with_links";
import GrayImg from "../../shared/gray_img";
import { Link } from "react-router-dom";

const Planet = (props) => {
    
    let title;

    if(props.title_with_underline)
    title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

    return (
        <div>
            <Link to={`/planet/${props.id}`}>{title}</Link> 
            <br />
            <DescriptionWithLink description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} gray={props.gray} />
            <hr />
        </div>
    )
    }
export default Planet;