import React from "react";
import './App.css';
import './styles.css';
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
        startDate: "",
        endDate: ""
      }
}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.mapData = this.mapData.bind(this);
}

  handleChange(event) {
    //  form name
    let parentId = event.target.parentElement.id;
    //  field name
    let field = event.target.closest("input").name;
    console.log(event)
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
    
    return (
      formFields.map((item) => {
        console.log(item)
        console.log(stateData)
        // item consists of name of field ((0) and field val (1)
        return (

        !stateData.saved ?   
        <>
            <label>{`${item[0][0].toUpperCase()}${item[0].substring(1)}: `}</label>
            <input
                required
                name = {item[0]}
                type = {item[0] == "phone" ? "tel" : "text"}
                value = {item[1]}
                onChange={(event) => this.handleChange(event)}
            >
            </input>
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
          data = {this.state}
        />
        <Practical 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          handleEdit = {this.handleEdit}
          data = {this.state}
        />
    </div>
  )
  }

}

export default App;
