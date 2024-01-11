import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { authorizationBearer, urlApi } from '../dati/dati'

export default class AddComment extends Component {

state = {
    comment: '', 
    rate: 0, 
    elementId: this.props.book.asin 
}

saveComment = () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments',
    {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': authorizationBearer
        }
    }
    )
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))
}

  render() {
    return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Add Comment</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter comment" 
                onChange={(e) => this.setState({ comment: e.target.value})}    
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
            <Form.Select 
                aria-label="Default select example"
                onChange={(e) => this.setState({ rate: e.target.value})}
                >
                <option>Comment rate</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
        </Form.Group>
        <Button variant="primary" type="button" onClick={this.saveComment}>
            Save Comment
        </Button>
    </Form>
    )
  }
}
