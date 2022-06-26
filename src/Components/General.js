import React from "react";

class General extends React.Component {
    // A section to add general information like name, email, phone number.

    constructor(props){
        super(props);
    }
    
    render() {
        const { data, handleChange, handleSubmit, handleEdit } = this.props;
        const formFields = Object.entries(data.general).slice(0, -1);

        return (
        <section>
             <h1>General</h1>
            <form id= "general" onSubmit={(event)=>handleSubmit(event)}>
                { formFields.map((item)=>{
                    // item consists of name of field ((0) and field val (1)
                    return (

                    !data.general.saved ?   
                    <>
                        <label>{`${item[0][0].toUpperCase()}${item[0].substring(1)}: `}</label>
                        <input
                            required
                            name = {item[0]}
                            type = {item[0] == "phone" ? "tel" : "text"}
                            value = {item[1]}
                            onChange={(event) => handleChange(event)}
                        >
                        </input>
                    </>
                    :
                    <>
                        <label>{`${item[0][0].toUpperCase()}${item[0].substring(1)}: `}</label>
                        <p>{item[1]}</p>
                    </>

                    )
                })
                }
                
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