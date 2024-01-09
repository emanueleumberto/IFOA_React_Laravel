import React from 'react';

function PrimoComp(props) {
    console.log(props)
    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            {props.list.map(ele => <p key={ele.id}>{ele.name} {ele.lastName} - {ele.city}</p> )}
            <strong>Tot. {props.list.length}</strong>
        </React.Fragment>
    )
}

export default PrimoComp;