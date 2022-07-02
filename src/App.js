import React, {useState, useRef} from "react";
import './App.css';
import './styles.css';
import uniqid from "uniqid";

import Education from "./Components/Education";
import General from './Components/General';
import Practical from './Components/Practical';

const App = () => {

    const [sections, setSections] = useState({
        general: {
          name: "",
          email: "",
          phone: "",
          saved: false,
        },

        education: {
          school: "",
          degree: "",
          year: "",
          saved: false,
        },
    
        practical: {
          company: "",
          role:"",
          description:"",
          start: "",
          end: "",
          saved: false
        }
    });

    const parentId = useRef(0);
    const field = useRef(0);

    // sections obj looks like this:

    //  sections = {
          // general: {
          //     name: "",
          // }
    //  }

  function handleChange(event) {
    event.preventDefault();
    parentId.current = event.target.parentElement.id;
    field.current = event.target.name;
    // parentId and field may be wiped upon rerender
    setSections((prevState) =>
    // bring in previous state vals
    ({...prevState,
      // target current section in state
     [parentId.current]: {
        ...prevState[parentId.current],
        [field.current]: event.target.value
      }
      })
    );

  }

  function handleSubmit(event) {
    event.preventDefault();    
    setSections((prevState) => 
      ({[event.target.id]: {
        ...prevState[event.target.id],
        saved: true
      }
      }
      )
    );
  };

  function handleEdit(event) {
    event.preventDefault();
    let parentId = event.target.parentElement.id;
    setSections((prevState)=> (
      {[parentId]: {
        ...prevState[parentId],
        saved: false
      }
      }
    ))   
  };


  function mapData(section) {
    
    let stateData = sections[section];
    console.log(Object.entries(sections))
    const formFields = Object.entries(stateData).slice(0, -1);
    let uniqueKey = uniqid();
     
    const checkNum = (itemType)=> {
      if (itemType === "phone") {
        return "tel";
      }
      else if ( itemType === "year") {
        return "number";
      }

      else if ( itemType === "start" || itemType === "end" ) {
        return "date";
      }

      else if (itemType ==="description") {
        return "textarea";
      }

      else {
        return "text";
      }
    }
  

    return (
      
      formFields.map((field) => {
        // field consists of name of field at 0 index and field val at index 1
        const getTitle = `${field[0][0].toUpperCase()}${field[0].substring(1)}`;
        return (
          !stateData.saved ?   
          <>
              <label /*key= {uniqueKey}*/>{`${getTitle}: `}</label>
              {field[0] === "description" ? 
                <textarea 
                  // key = {uniqueKey}
                  required
                  rows ="4"
                  name = {field[0]}
                  value = {field[1]}
                  onChange={(event) => handleChange(event)}
                /> 
                : 
                <input
                  // key = {uniqueKey}
                  required
                  name = {field[0]}
                  type = {checkNum(field[0])}
                  value = {field[1]}
                  onChange={(event) => handleChange(event)}
              >
              </input>
              }
          </>
          :
          <>
              <label>{`${field[0][0].toUpperCase()}${field[0].substring(1)}: `}</label>
              <p>{field[1]}</p>
          </>

        )
      }) 
    )
  
  };

 
  return (
    <div className="App">

        <General 
          handleSubmit = {handleSubmit}
          handleEdit = {handleEdit}
          mapData = {mapData}
          data = {sections}
        />
        <Education 
          handleSubmit = {handleSubmit}
          handleEdit = {handleEdit}
          mapData = {mapData}
          data = {sections}
        />
        <Practical 
          handleSubmit = {handleSubmit}
          handleEdit = {handleEdit}
          mapData = {mapData}
          data = {sections}
        />
    </div>
  )
  
  }

export default App;
