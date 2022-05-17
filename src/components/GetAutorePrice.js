import React from "react";
import { Table, Card, Container } from "react-bootstrap";
import apiPath from "../Config";
class GetAutorePrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            libri: [],
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch(apiPath + "/api/book/autoreprezzo", {
                method: "GET"
            });
            if (!res.ok) {
                throw new Error(`HTTP error ${res.status}`);
            }
            res.json()
                .then((libri) =>
                    this.setState({ libri })
                )
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <Container className="vh-100 d-flex flex-column ">
                <Card className="text-center">
                    <Card.Body></Card.Body>
                </Card>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Autore</th>
                            <th>Prezzo</th>
                            <th>ISBN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.libri.map((libro) => {
                            return [
                                <tr key={libro.ID}>
                                    <th>{libro.ID}</th>
                                    <th>{libro.autore}</th>
                                    <th>{libro.prezzo}</th>
                                    <th>{libro.ISBN}</th>
                                </tr>,
                            ];
                        })}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default GetAutorePrice;