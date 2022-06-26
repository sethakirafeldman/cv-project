import React from "react";

class Education extends React.Component {
    // A section to add your educational experience (school name, title of study, date of study)
    constructor(props) {
        super(props);
    }

    render() {
        // destructures props into objs
        const { data, handleSubmit, handleEdit, mapData } = this.props;

        return (
        <section>
            <h1>Education</h1>
            <form id= "education" onSubmit={(event)=>handleSubmit(event)}>
                {mapData("education")}
                {!data.education.saved ? 
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
        </section>)
    }
}

export default Education;