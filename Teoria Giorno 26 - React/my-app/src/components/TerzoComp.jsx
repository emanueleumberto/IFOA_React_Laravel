
import { Component } from 'react'
import { Paragraph } from './QuartoComp'
/* import React from 'react'; */

export default class TerzoComp extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <h1>{this.props.title}</h1>
                {this.props.list.map(ele => <Paragraph key={ele.id} user={ele} /> )}
                <strong>Tot. {this.props.list.length}</strong>
            </>
        )
    }
}

/* export default TerzoComp; */