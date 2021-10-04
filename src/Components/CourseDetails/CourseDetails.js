import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const CourseDetails = () => {
    const [packages, setPackages] = useState([]);
    useEffect( () =>{
        fetch('./Data.JSON')
            .then( res => res.json())
            .then( data => setPackages(data))
    } ,[])
    return (
        <Row xs={2} md={4} className="g-4 p-4 ">
            {
                packages.map( pack => 
                
                    <Col>
                        <Card className="h-100 text-center">
                            <Card.Img className="p-2 rounded" height="150" variant="top" src={pack.img} />
                            <Card.Body>
                            <Card.Title>{pack.crouse_name}</Card.Title>
                            <Card.Text>
                                {pack.details}
                            </Card.Text>
                            <h4 className="btn btn-outline-info rounded-pill">Enroll fee: $ <span>{pack.price}</span></h4>
                            </Card.Body>
                        </Card>
                    </Col>
                 )
            }
        </Row>
    );
};

export default CourseDetails;