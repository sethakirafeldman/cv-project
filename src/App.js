import React from "react";
import './App.css';
import './styles.css';
import uniqid from "uniqid";
import Education from "./Components/Education";
import General from './Components/General';
import Practical from './Components/Practical';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.mapData = this.mapData.bind(this);
}

  handleChange(event, inputType) {
    //  form name
    const parentId = event.target.parentElement.id;
    let field;
    inputType === "description" 
      ? field = event.target.closest("textarea").name 
      : field = event.target.closest("input").name;

    this.setState((prevState) => (
      {[parentId]: {
          ...prevState[parentId],
          [field]: event.target.value}
      }
      )
    );

  }

  handleSubmit(event) {
    event.preventDefault();    
    this.setState((prevState) => (
      {[event.target.id]: {
        ...prevState[event.target.id],
        saved: true
      }
      }
    ));
  }

  handleEdit(event) {
    event.preventDefault();
    let parentId = event.target.parentElement.id;
    console.log(this.state[parentId]);
    this.setState((prevState)=> (
      {[parentId]: {
        ...prevState[parentId],
        saved: false
      }
      }
    ))   
  };

  mapData(section) {
    const stateData = this.state[section];
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
      formFields.map((item) => {
        // item consists of name of field ((0) and field val (1)
        const getTitle = `${item[0][0].toUpperCase()}${item[0].substring(1)}`;
        return (
        !stateData.saved ?   
        <>
            <label key= {uniqueKey}>{`${getTitle}: `}</label>
            {item[0] === "description" ? 
              <textarea 
                required
                rows ="4"
                name = {item[0]}
                value = {item[1]}
                onChange={(event) => this.handleChange(event, item[0])}
              /> 
              : 
              <input
                required
                name = {item[0]}
                type = {checkNum(item[0])}
                value = {item[1]}
                onChange={(event) => this.handleChange(event)}
            >
            </input>
            }
            

        </>
        :
        <>
            <label>{`${item[0][0].toUpperCase()}${item[0].substring(1)}: `}</label>
            <p>{item[1]}</p>
        </>

        )
      }) 
    )
  }

  render() {
  return (
    <div className="App">

        <General 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          handleEdit = {this.handleEdit}
          mapData = {this.mapData}
          data = {this.state}
        />
        <Education 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          handleEdit = {this.handleEdit}
          mapData = {this.mapData}
          data = {this.state}
        />
        <Practical 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          handleEdit = {this.handleEdit}
          mapData = {this.mapData}
          data = {this.state}
        />
    </div>
  )
  }

}

export default App;
