import React, { Component } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap';

export default class FormComponent extends Component {

    state = {
        name: '',
        email: ''
    }

    handleChangeEmail = (event) =>  {
        //console.log(event.target.value)
        this.setState({ email: event.target.value})
    }

    handleChangeFullname = (event) =>  {
        //console.log(event.target.value)
        this.setState({ name: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name + ' - ' + this.state.email)
        this.setState({  name: '',email: ''})
    }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.name} 
                            placeholder="Enter fullname"
                            onChange={this.handleChangeFullname}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={this.state.email} 
                            placeholder="Enter email"
                            onChange={this.handleChangeEmail}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
                { this.state.name && this.state.email &&  
                    <Alert variant={'success'}>
                        {this.state.name + ' - ' + this.state.email}
                    </Alert>
                }
            
            </Container>
            
        )
    }
}




// Spiegazione del This su Function e ArrowFunction
/* class User {
    firstname;
    lastname;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    info() {
        //console.log(this)
        const self = this;
        window.setTimeout(function() {
            //console.log(this)
            //console.log(self)
            console.log('Ciao ' +  self.firstname + ' -  ' + self.lastname);
        }, 1000)
    }

    infoArrow() {
        //console.log(this)
        window.setTimeout(() => {
            //console.log(this)
            console.log('Ciao ' +  this.firstname + ' -  ' + this.lastname);
        }, 1000)
    }
}

window.firstname = 'Giuseppe';
window.lastname = 'Verdi';

let u = new User('Mario', 'Rossi');
u.infoArrow()
 */