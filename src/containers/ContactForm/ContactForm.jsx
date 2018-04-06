import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            name: null,
            email: null,
            message: null
          };
    
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
      }
    
      handleChange( event ) {
          const target = event.target;
          const value = target.value;
          const name = target.name; 
          this.setState( { [ name ]: value } );
      }
    
      handleSubmit( event ){
        console.log( 'A name was submitted: ' + this.state.email );
        event.preventDefault();
      }
    
      render() {
        return (
        <div className={ "css-contactFormDiv" } >
            <form className={ "css-actualForm" } onSubmit={ this.handleSubmit }>
                    <label>
                      <div>Name:</div>
                      <input className={ "css-emailInput" } type="text" name={ "name" } value={ this.state.value } onChange={ this.handleChange } />
                    </label>
                    <br />
                    <label>
                      <div>Email:</div>
                      <input className={ "css-emailInput" } type="email" required name={ "email" } value={ this.state.value } onChange={ this.handleChange } />
                    </label>
                    <br/>
                    <label>
                      <div>Message:</div>
                      <textarea className={ "css-messageInput" } type="text" name={ "message" } value={ this.state.value } onChange={ this.handleChange } />
                    </label>
                    <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
        );
      }
    }

export default ContactForm;