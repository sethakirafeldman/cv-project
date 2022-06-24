import React from "react";

class Practical extends React.Component {
    // A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
    constructor(props){
        super(props);
    }
    
    render() {
        const {data, handleChange, handleSubmit} = this.props;

        return (
        <section>
            <h1>Practical Skills</h1>
            <form id="practical" onSubmit={(event) => handleSubmit(event)}>
                <label>Company: </label>
                {!data.practical.saved ? 
                    <input
                    required
                    name="company"
                    type="text"
                    value= {data.practical.company}
                    onChange={(event)=> handleChange(event)}
                    >    
                    </input>
                    :
                    <p>{data.practical.company}</p>
                }
                <label>Role: </label>
                {!data.practical.saved ? 
                    <input
                    required
                    name="role"
                    type ="text"
                    value= {data.practical.role}
                    onChange={(event)=> handleChange(event)}
                    >
                    </input>
                    :
                    <p>{data.practical.role}</p>
                }

                <label>Start Date: </label>
              {!data.practical.saved ?
              
                <input
                    required
                    name ="startDate"
                    type="date"
                    value ={data.practical.startDate}
                    onChange={(event)=> handleChange(event)}
                    ></input>
                    :
                    <p>{data.practical.startDate}</p>
                }

            <label>End Date: </label>
            {!data.practical.endDate ?
                 <input
                 required
                 name ="endDate"
                 type="date"
                 value = {data.practical.endDate}
                 onChange={(event)=> handleChange(event)}
                ></input>
                :
                <p>{data.practical.endDate}</p>
            }
               
                <input type="submit" value="Submit"></input>

            </form>
        </section>
        )
    }
}

export default Practical;