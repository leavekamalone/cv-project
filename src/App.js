import React from 'react';
import { Component } from 'react';
import Header from './Header.js';
import Edu from './Edu.js';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      school: '',
      title: '',
      beginDate: '',
      endDate: '',
      fullEdu: [],
      visible: false,
    };

  };

  edit = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState ({
      school: this.state.fullEdu[0],
      title: this.state.fullEdu[1],
      beginDate: this.state.fullEdu[2],
      endDate: this.state.fullEdu[3],
      fullEdu: [],
      visible: false,
    })
    
   // this.setState({[});
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]:val});
  };

  onSubmit = (e) => {
    e.preventDefault();
    
    this.setState({
      fullEdu: this.state.fullEdu.concat(this.state.school,this.state.title,this.state.beginDate,this.state.endDate),
      school: '',
      title: '',
      beginDate: '',
      endDate: '',
      visible: true,

    });
    
  };
  render() {
    const { school, title, beginDate, endDate, fullEdu, visible } = this.state;

  return (
  
    <div>
       
       <Edu fullEdu={fullEdu} />
     
     {visible ? (
       <div class="text-center">
       <button class="btn btn-primary" onClick={this.edit}>Edit</button>
       </div>
     ) : 
    (<form className="col-2 mx-auto mt-4" onSubmit={this.onSubmit}>
   
     <p>Which School did you go to?</p> 
      <input type="text" name="school" value ={school} className="form-control" onChange={this.handleChange}/>
    
   
     <p>What was your degree?</p> 
      <input type="text" name="title" value={title} className="form-control" onChange={this.handleChange}/>
    
    
      <p>When did your Education Begin?</p>
      <input type="date" name="beginDate" value={beginDate} className="form-control" onChange={this.handleChange}/>
      
      <p>When did your Education End?</p>
      <input type="date" name="endDate" value={endDate} className="form-control" onChange={this.handleChange}/>
    
    <input type="submit" value="Submit" />
      
  </form>)}
 
  
  </div>
  
  );

  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
      fullHeader: [],
      visible: false,
    };

  };

  edit = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState ({
      name: this.state.fullHeader[0],
      email: this.state.fullHeader[1],
      phone: this.state.fullHeader[2],
      fullHeader: [],
      visible: false,
    })
    
   // this.setState({[});
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]:val});
  };

  onSubmit = (e) => {
    e.preventDefault();
    
    this.setState({
      fullHeader: this.state.fullHeader.concat(this.state.name,this.state.email,this.state.phone),
      name: '',
      email: '',
      phone: '',
      visible: true,

    });
    
  };
  render() {
    const { name,email,phone, fullHeader, visible } = this.state;

  return (
  
    <div>
       <Header fullHeader={fullHeader}/>
       
     
     {visible ? (
       <div class="text-center">
       <button class="btn btn-primary" onClick={this.edit}>Edit</button>
       </div>
     ) : 
    (<form className="col-2 mx-auto mt-4" onSubmit={this.onSubmit}>
   
     <p>Name:</p> 
      <input type="text" name="name" value ={name} className="form-control" onChange={this.handleChange}/>
    
   
     <p>Email:</p> 
      <input type="text" name="email" value={email} className="form-control" onChange={this.handleChange}/>
    
    
      <p>Phone Number (Format: 123-456-7890):</p>
      <input type="tel" name="phone" value={phone} className="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChange}/>
    
    <input type="submit" value="Submit" />
      
  </form>)}
 
  <Education />
  </div>
  
  );

  }
}

export default App;
