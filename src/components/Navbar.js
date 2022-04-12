import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
export default class DefNavbar extends React.Component {
    render(){
        return(
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/update">UpdateBook</Nav.Link>
                        <Nav.Link href="/add">AddBook</Nav.Link>
                        <Nav.Link href="/delete">DeleteBook</Nav.Link>
                        <Nav.Link href="/rent">RentBook</Nav.Link>
                        <Nav.Link href="/return">ReturnBook</Nav.Link>
                        <Nav.Link href="/expiries">Expiries</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}