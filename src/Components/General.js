import React from "react";

const General = (props) => {
    // A section to add general information like name, email, phone number.


        const { data, handleSubmit, handleEdit, mapData } = props;

        return (
            <section>
                <h1>General</h1>
                <form id= "general" onSubmit={(event)=>handleSubmit(event)}>
                    {mapData("general")}
                    {!data.general.saved ? 
                        <input type="submit" value="Submit"></input>
                        :
                        <input 
                            type="button" 
                            value="Edit"
                            onClick={(event)=> handleEdit(event)}
                            >
                        </input>
                    }
                </form>
            </section>
        )
    }

export default General;