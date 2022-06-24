import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props);
    }
    // A section to add your educational experience (school name, title of study, date of study)

    render() {
        // destructures props into objs
        const { data, handleChange, handleSubmit } = this.props;

        return (
        <section>
            <h1>Education</h1>
            <form id = "education" onSubmit={handleSubmit}>
                <label>School:</label>
                <input 
                    type="text" 
                    value= {data.education.school}
                    onChange={(event)=> handleChange(event)}
                >                                 
                </input>
                <label>Degree:</label>
                <input 
                    type="text" 
                    value={data.education.degree}
                    onChange={(event) => handleChange(event)}
                >                                 
                </input>
                <label>Year:</label>
                <input 
                    type="number" 
                    value= {data.education.year}
                    onChange={(event) => handleChange(event)}
                >                                 
                </input>    
                <input type="submit" value="Submit"></input>    
            </form>
        </section>)
    }
}

export default Education;