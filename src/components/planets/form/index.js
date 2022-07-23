import React, { Fragment, useState } from "react";

const Form = (props) => {

    const initialState = {
        name: '', 
        description: '', 
        link: '', 
        img_url: ''
    }

    const [fields, setFields] = useState(initialState)
    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = e => {
        props.addPlanet(fields)
        e.preventDefault();
        setFields(initialState)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" className="input is-primary" name="name" type="text" value={fields.name} maxLength="50" size="50" onChange={handleFieldsChange} />
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input id="description" className="input is-primary" name="description" type="text" value={fields.description} maxLength="300" size="300" onChange={handleFieldsChange} />
                </div>
                <div>
                    <label htmlFor="link">Link: </label>
                    <input id="link" className="input is-primary" name="link" type="text" value={fields.link} maxLength="50" size="50" onChange={handleFieldsChange} />
                </div>
                <div>
                    <label htmlFor="img_url">Image: </label>
                    <input id="img_url" className="input is-primary" maxLength="100" size="100" name="img_url" type="text" value={fields.img_url} onChange={handleFieldsChange} />
                </div>
                <br />
                <input className="button is-success is-light" type="submit"></input>
            </form>
        </Fragment>
    )
}

export default Form;