import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props);
    }

    // A section to add general information like name, email, phone number.
    render() {
        return (
        <section>
            <h1>Education</h1>
            <form onSubmit={this.props.handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text" 
                    value="temp state"
                    onChange={this.props.handleChange}
                >                                 
                </input>
                <label>Email:</label>
                <input 
                    type="text" 
                    value="temp state"
                    onChange={this.props.handleChange}
                >                                 
                </input>
                <label>Phone:</label>
                <input 
                    type="text" 
                    value="temp state"
                    onChange={this.props.handleChange}
                >                                 
                </input>        
            </form>
        </section>)
    }
}

export default Education;