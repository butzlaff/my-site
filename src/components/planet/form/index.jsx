import React, { Fragment, useState } from "react";

const Form = (props) => {

    const initialState = {
        name: ''
    }


    const [fields, setFields] = useState(initialState)
    
    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = e => {
        props.addSattelites(fields)
        e.preventDefault();
        setFields(initialState)
    }
    
    return (
        <Fragment>
            <form class="field" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input className="input is-primary" id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <br/>
                <input class="button is-success is-light" type="submit"></input>
            </form>
            <hr></hr>
        </Fragment>
    )
}

export default Form;