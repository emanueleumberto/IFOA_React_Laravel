import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from "react-bootstrap";
import Job from './Job';

export default function Favourites() {

    const favourites = useSelector(state => state.favourites.favourites)

    return (

        <Container>
            <Row>
                <Col className="my-3">
                {favourites.map(jobData => (
                    <Job key={jobData._id} data={jobData} />
                ))}
                </Col>
            </Row>
        </Container>
    )
}
