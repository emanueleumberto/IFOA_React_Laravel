import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

export default class SingleBook extends Component {

state = {
    selected: false
}

selectedBook = () => {
    this.setState((prevState) => ({selected: !prevState.selected}))
}

  render() {
    return (
        <Card style={{ width: '18rem' }} className={this.state.selected === true ? 'selectedBook' : ''}>
            <Card.Img 
                variant="top" 
                src={this.props.book.img} 
                onClick={this.selectedBook} />
            <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                {this.state.selected &&
                    <CommentArea book={this.props.book} selectedClosed={this.selectedBook} />
                }
            </Card.Body>
        </Card>
    )
  }
}

