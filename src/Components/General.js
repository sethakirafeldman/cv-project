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
            <form id= "general" onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    name="name"
                    type="text"
                    value= {data.general.name}
                    onChange={(event)=>this.props.handleChange(event)}
                >
                </input>
                <label>Email</label>
                <input
                    name="email"
                    type="text"
                    value= {data.general.email}
                    onChange={(event)=>this.props.handleChange(event)}
                >
                </input>
                <label>Phone</label>
                <input
                    name="phone"
                    type="tel"
                    value= {data.general.phone}
                    onChange={(event)=>this.props.handleChange(event)}
                >
                </input>
                <input type="submit" value="Submit"></input>

            
            </form>
        </section>
        )
    }
}

export default General;