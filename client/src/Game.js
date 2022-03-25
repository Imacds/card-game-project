import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';

//import './App.css';

function cardClick(cardName){
    console.log(`Clicked on card ${cardName}`);
}

function Game(props) {
    return(
        <div className="App">
            <header className="App-header">
                <h1> It is Player 2's turn!</h1>
                <Container justify-content-md-center>
                    <Row className="flex-row flex-nowrap overflow-auto">                    
                        <Col>
                            <Card body style={{ width: '18rem' }} bg="light" text="dark">                            
                                <Card.Text>Player 1</Card.Text>
                                <Card.Title>Has 3 cards left.</Card.Title>
                                <ListGroup>
                                    <ListGroup.Item action onClick={cardClick("card123")} className="text-muted">Hidden Card</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick} className="text-muted">Hidden Card</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>±1</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>-6</ListGroup.Item> 
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col>
                            <Card body style={{ width: '18rem' }} bg="light" text="dark">                            
                                <Card.Text>Player 2</Card.Text>
                                <Card.Title>Has 5 cards left.</Card.Title>
                                <ListGroup>
                                    <ListGroup.Item action onClick={cardClick} className="text-muted">Hidden Card</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>+4</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>-4</ListGroup.Item> 
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col>
                            <Card body style={{ width: '18rem' }} bg="light" text="dark">                            
                                <Card.Text>Player 3</Card.Text>
                                <Card.Title>Has 5 cards left.</Card.Title>
                                <ListGroup>
                                    <ListGroup.Item action onClick={cardClick} className="text-muted">Hidden Card</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>±1 <Badge bg="secondary">x2</Badge></ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>-6</ListGroup.Item> 
                                </ListGroup>
                            </Card>
                        </Col>  
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                        <Col md="auto">
                            <Card body style={{ width: '18rem' }} bg="dark" text="light">                            
                                <Card.Text>Your Hand</Card.Text>
                                <ListGroup>
                                    <ListGroup.Item action onClick={cardClick}>±1</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>x2</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>Play a Card Face Down</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>+3</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>-2</ListGroup.Item> 
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col md="auto">
                            <Card body style={{ width: '18rem' }} bg="light" text="dark">                            
                                <Card.Text>Your Field</Card.Text>
                                <ListGroup>
                                    <ListGroup.Item action onClick={cardClick} className="text-muted">+5 (Hidden)</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>+3</ListGroup.Item> 
                                    <ListGroup.Item action onClick={cardClick}>+2</ListGroup.Item> 
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                        <Col>
                            <Button className="" variant="outline-primary" onClick={props.changePageState}>Pass</Button>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Game;