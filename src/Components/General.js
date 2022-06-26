import React from "react";

class General extends React.Component {
    // A section to add general information like name, email, phone number.
    constructor(props){
        super(props);
    }
    
    render() {
        const { data, handleSubmit, handleEdit, mapData } = this.props;

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
}

export default General;