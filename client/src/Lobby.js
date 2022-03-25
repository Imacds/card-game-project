import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

//import './App.css';

function Lobby() {
    return(
        <div className="App">
            <header className="App-header">
                <h1> Card Game Project Lobby</h1>
                <Container>
                <Row className="justify-content-center">
                    <Col>
                        <label>Player List</label>
                        <Stack gap={1}>
                            <div className="bg border" id="playerListingPlayer1">Player 1 <Button id="kickPlayer1" variant="outline-primary">Kick</Button></div>
                            <div className="bg border" id="playerListingPlayer2">Player 2 <Button id="kickPlayer2" variant="outline-primary">Kick</Button></div>
                            <div className="bg border" id="playerListingPlayer3">Player 3 <Button id="kickPlayer3" variant="outline-primary">Kick</Button></div>
                        </Stack>
                        <Button id="startButton" variant="outline-primary">Start Game</Button> 
                    </Col>
                    <Col>
                        <Form.Label htmlFor="nameInput">Name</Form.Label>
                        <Form.Control type="text" id="nameInput" aria-describedby="nameInputDesc" />
                        <Form.Text id="nameInputDesc" muted>
                            Please input a name and push the ready button to add yourself to the player list. Press start once all players have entered and readied up.
                        </Form.Text>
                        <br/>
                        <Button className="" id="readyButton" variant="outline-primary">Ready Up</Button> 
                    </Col>
                </Row>
                </Container>
            </header>
        </div>
    )
}

export default Lobby;