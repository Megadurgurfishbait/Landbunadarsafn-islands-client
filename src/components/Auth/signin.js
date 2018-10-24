import React, { Component } from 'react';
import {reduxForm, Field } from 'redux-form';
import * as actions from '../../actions'
import { connect } from 'react-redux';

const renderInput = field => (
      <div>
            <input {...field.input} type={field.type} className="form-control" />
            {field.meta.touched && field.meta.error}
            <span>{field.meta.error}</span>
      </div>
     )

class Signin extends Component {

      // Gera ehv við email og password
      handleFormSubmit({email, password}) {

            this.props.signInUser({email, password});

      }

      renderAlert(){
            if(this.props.errorMessage){
                  return(
                        <div className="alert alert-danger">
                              <strong>Ooops! </strong>{this.props.errorMessage}
                        </div>
                  );
            }
      }

  
      render() {
            // handleSubmit kemur úr redux-form
            // Fields kemur frá því sem að við stiltum niðri í export default reduxForm;
            // eslint-disable-next-line
            const { handleSubmit, fields:  {email, password }} = this.props;

            return (
                  <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <fieldset className="form-group">
                              <label>Email:</label>
                              <Field
                              name="email"
                              component={renderInput}
                              type="text" />
                        </fieldset>
                        <fieldset className="form-group">
                              <label>Password:</label>
                              <Field
                              name="password"
                              component={renderInput}
                              type="password" />
                        </fieldset>
                        {this.renderAlert()}
                        <button action="submit" className="btn btn-primary">Sign in</button>
                  </form>)
      }
}


function mapStateToProps(state) {
      return {errorMessage: state.auth.error};
}



export default reduxForm({
      form: 'signin',
      fields: ['email', 'password']
    })(
      connect(mapStateToProps, actions)(Signin)
    );
    
