import {Nav, Container, Navbar, Button, Form, Input} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
export default function Topmenu ({addStrike, strikes, addSerial, serial}) {
    return(
        <Navbar bg="light" expand="lg">
            <Container className="d-flex flex-row">                
                <LinkContainer to="/">
                <Navbar.Brand>KTANE Helper</Navbar.Brand>
                    </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <LinkContainer to="/wires">
                        <Nav.Link >Wires</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="ml-auto mx-2">
                    <Form className="d-flex">
                        {serial.length > 5 ? <span className="mt-2">✅</span> : ""}
                        <Form.Control onChange={addSerial} type="text" className="mx-3" placeholder={"Enter serialnumber"} maxLength="6"/>

                    </Form>
                </Nav>
                <Nav>
                    <Nav className="navbar-btn ml-auto ">
                        <Button onClick={addStrike} variant="danger" className="btn-nav mr-3">Add strike! ({strikes})</Button>
                    </Nav>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}