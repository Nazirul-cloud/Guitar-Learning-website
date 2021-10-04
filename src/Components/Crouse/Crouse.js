import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Crouse = (props) => {
    console.log(props);
    const {crouse_name, img, details, price} = props.package;
    return (
        <div>
            <Col>
                <Card className="h-100 text-center">
                    <Card.Img className="p-2 rounded" variant="top" height="150" src={img} />
                    <Card.Body>
                        <Card.Title>{crouse_name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <h4 className="btn btn-outline-info rounded-pill">Enroll fee: $ <span>{price}</span></h4>
                    </Card.Body>
                </Card>
        </Col>
        </div>
    );
};

export default Crouse;