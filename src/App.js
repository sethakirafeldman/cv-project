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

  render() {
  return (
    <div className="App">

        <General 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          handleEdit = {this.handleEdit}
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
