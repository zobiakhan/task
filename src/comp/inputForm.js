import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

import { inputformaction } from './redux/action';

class inputForm extends Component {


  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      company: '',
      telephone: '',
      dob: '',
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitbutton = (e) => {
    e.preventDefault(e);
    this.props.inputformaction(this.state);
    alert('form submitted.click on display form to view');
  };

  render() {
    return (
      <div>
        <h2>Please Fill the Form</h2>
       
        <form onSubmit={this.submitbutton}>

         <input type="text" name="firstname" placeholder="First Name" onChange={this.onChange} required/>
          <input type = "text" name="lastname" placeholder = "Last Name" onChange={this.onChange} required/>
          <input type="text" name="address"  placeholder="Address" onChange={this.onChange} required/>
          < input type = "text" name="company" placeholder="company" onChange={this.onChange} required/>
          <input type="text" name="telephone" placeholder="Telephone Phone (03331234567)" pattern="[0-9]{11}}" onChange={this.onChange} required/>
          <input type = "text" name="dob" placeholder = "DOB (01-01-2018)" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onChange={this.onChange} required/>
          <br/>
          <button type="submit" > Submit </button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  inputformaction: data => dispatch(inputformaction(data)),
});


export default connect(null, mapDispatchToProps)(inputForm);