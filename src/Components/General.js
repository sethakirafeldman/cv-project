import React from "react";

class General extends React.Component {
    // A section to add general information like name, email, phone number.

    constructor(props){
        super(props);
    }

    render() {
        const { data, handleChange, handleSubmit, handleEdit } = this.props;

        return (
        <section>
            <h1>General</h1>
            <form id= "general" onSubmit={(event)=>handleSubmit(event)}>
                <label>Name: </label>
                {!data.general.saved ? 
                    <input
                        required
                        name="name"
                        type="text"
                        value= {data.general.name}
                        onChange={(event) => handleChange(event)}
                    >
                    </input> : <p>{data.general.name}</p> }
                
                <label>Email</label>
                {!data.general.saved ? 
                    <input
                        required
                        name="email"
                        type="text"
                        value= {data.general.email}
                        onChange={(event)=> handleChange(event)}
                    >
                    </input> : <p>{data.general.email}</p> }
                
                <label>Phone</label>
                {!data.general.saved ?
                    <input
                        required
                        name="phone"
                        type="tel"
                        value= {data.general.phone}
                        onChange={(event)=> handleChange(event)}
                    >
                    </input>
                : <p>{data.general.phone}</p>
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