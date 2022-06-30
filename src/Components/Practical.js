import React from "react";

const Practical = (props) => {
    // A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)

        const {data, handleSubmit, handleEdit, mapData} = props;

        return (
            <section>
                <h1>Practical Skills</h1>
                <form id="practical" onSubmit={(event) => handleSubmit(event)}>
                    {mapData("practical")}
                    {!data.practical.saved ? 
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


export default Practical;