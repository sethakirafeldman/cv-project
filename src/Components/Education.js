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
            <form id = "education" onSubmit={(event)=>handleSubmit(event)}>
                <label>School:</label>
                {!data.education.saved ? 
                    <input 
                    required
                    name="school"
                    type="text" 
                    value= {data.education.school}
                    onChange={(event)=> handleChange(event)}
                     >                                 
                    </input> 
                    :
                    <p>{data.education.school}</p>
                }
                <label>Degree:</label>
                {!data.education.saved ? 
                    <input 
                    required
                    name="degree"
                    type="text" 
                    value={data.education.degree}
                    onChange={(event) => handleChange(event)}
                    >                                 
                    </input>
                    : 
                    <p>{data.education.degree}</p>
                }
                <label>Year:</label>
                {!data.education.year ? 
                     <input 
                     required
                     name="year"
                     type="number" 
                     value= {data.education.year}
                     onChange={(event) => handleChange(event)}
                    >                                 
                    </input>  
                    :
                    <p>{data.education.year}</p>  
                }
               
                <input type="submit" value="Submit"></input>    
            </form>
        </section>)
    }
}

export default Education;