import React, {Prototypes} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

class ClosetCategories extends React.Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <div className="d-grid gap-2">
                            <Button variant="outline-primary">Tops</Button> 
                            <Button variant="outline-primary">Dresses</Button> 
                            <Button variant="outline-primary">Pants &amp; Leggings</Button> 
                            <Button variant="outline-primary">Skirts</Button>
                            <Button variant="outline-primary">Shorts</Button> 
                            <Button variant="outline-primary">Activewear</Button> 
                        </div>
                        </Col>
                        <Col>
                        <div className="d-grid gap-2">
                            <Button variant="outline-primary">Bras &amp; Panties</Button> 
                            <Button variant="outline-primary">Sweaters</Button> 
                            <Button variant="outline-primary">Jackets & Coats</Button> 
                            <Button variant="outline-primary">Jewelry</Button>
                            <Button variant="outline-primary">Accessories</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ClosetCategories;