import React from "react";
import { Table, Card, Container } from "react-bootstrap";
import apiPath from "../Config";
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
        };
    }

    componentDidMount() {
        fetch(apiPath + "/api/book/all")
            .then(async response => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return await response.json();
            })
            .then((books) =>
                this.setState({ books })
            )
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <Container className="vh-100 d-flex flex-column ">
                <Card className="text-center">
                    <Card.Body>Libri nella biblioteca</Card.Body>
                </Card>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Autore</th>
                        <th>Titolo</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.books.map((book) => {
                        return [
                            <tr key={book.ISBN}>
                                <th>{book.ISBN}</th>
                                <th>{book.Autore}</th>
                                <th>{book.Titolo}</th>
                                <th>{book.Quantity}</th>
                            </tr>,
                        ];
                    })}
                    </tbody>
                </Table>
            </Container>
        );
    }
}