import React from "react";

const Education = (props) => {
    // A section to add your educational experience (school name, title of study, date of study)
 
        // destructures props into objs
        const { data, handleSubmit, handleEdit, mapData } = props;

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

export default Education;