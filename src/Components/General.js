import React from "react";

class General extends React.Component {
    // A section to add general information like name, email, phone number.

    constructor(props){
        super(props);
    }

    render() {
        const { data, handleChange, handleSubmit } = this.props;

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
                <input
                    required
                    name="phone"
                    type="tel"
                    value= {data.general.phone}
                    onChange={(event)=> handleChange(event)}
                >
                </input>
                <input type="submit" value="Submit"></input>

            
            </form>
        </section>
        )
    }
}

export default General;