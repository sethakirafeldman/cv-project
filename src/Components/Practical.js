import React from "react";

class Practical extends React.Component {
    // A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
    constructor(props){
        super(props);
    }
    
    render() {
        const {data} = this.props;

        return (
        <section>
            <h1>Practical Skills</h1>
            <form id="practical" onSubmit={this.props.handleSubmit}>
                <label>Company: </label>
                <input
                    name="company"
                    type="text"
                    value="test"
                    onChange={(event)=> this.props.handleChange(event)}
                >    
                </input>
                <label>Role: </label>
                <input
                    name="role"
                    type ="text"
                    value="test"
                    onChange={(event)=> this.props.handleChange(event)}
                >
                </input>

                <label>Date: </label>
                <input
                    name ="date"
                    type="text"
                    value ="test"
                    onChange={(event)=> this.props.handleChange}
                ></input>
                <input type="submit" value="Submit"></input>

            </form>
        </section>
        )
    }
}

export default Practical;