import React, {useState} from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import projects from '../utils/projects';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col'


function Portfolio (){
    const [Images] = useState(projects)

    return(
        <Container>
            <Nav />
            <Row>
                {Images.map((image, index) => {
                    return(
                        <Col size="col-md-6" key={index}>
                            <Card card={image} key={index}/>
                        </Col>
                    )
                })}
            </Row>
            <Footer />
        </Container>
    )
}

 export default Portfolio;   
    
