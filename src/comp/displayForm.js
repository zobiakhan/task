import React, { Component } from 'react';
import { connect } from 'react-redux';

class displayForm extends Component {
  render() {
    return (
      <div>
        <h2>
          Form Data List
        </h2>
        
        <p>First Name: <strong>{this.props.user.firstname}</strong></p>
        <p>Last Name: <strong>{this.props.user.lastname}</strong></p>
        <p>Address: <strong>{this.props.user.address}</strong></p>
        <p>Company: <strong>{this.props.user.company}</strong></p>
        <p>Telephone: <strong>{this.props.user.telephone}</strong></p>
          <p>DOB: <strong>{this.props.user.dob}</strong></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, null)(displayForm);
