import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import Crouse from '../Crouse/Crouse';
import Overlays from '../../images/Overlays.jpg';


const Crouses = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('./Data.JSON')
            .then( res => res.json())
            .then( data => setPackages(data.slice(0,4)))
    } ,[]);
    return (
        <>
                  {/* Image Overlays start */}
        <Card className="bg-dark text-white mb-5">
            <Card.Img src={Overlays} width="689px" height="370px" alt="Card image" />
            <Card.ImgOverlay className="p-5 mt-5">
            
            <Card.Title className="fs-1 text-warning mb-3"> <span className="text-danger">L</span>et's play</Card.Title>
                <Card.Text className="fst-italic">
                Guitar lessons are all broken down into 8 categories to <br /> make it easy to keep your progress organized.
                </Card.Text>
         
        </Card.ImgOverlay>
       </Card>
          
             

            <h2 className="text-info px-4">Guitar Skills</h2>
            <p className="px-4 pb-3">Guitar 101! Here you'll pick up all the tools you need to become the complete guitarist.</p>
            <Row xs={1} md={4} className="g-4 px-4">
              {
                  packages.map(pack => <Crouse 
                    key  ={pack.id}
                    package ={pack}
                  ></Crouse>)
              }
            </Row>

       
        </>
    );
};

export default Crouses;