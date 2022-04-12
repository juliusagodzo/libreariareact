import React from "react";
import { Table, Card, Container } from "react-bootstrap";
import apiPath from "../Config";
class RentExpiries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rents: [],
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch(apiPath + "/api/book/nearexpiry", {
                method: "GET"
            });
            if (!res.ok) {
                throw new Error(`HTTP error ${res.status}`);
            }
            res.json()
                .then((rents) =>
                    this.setState({rents})
                )
                .catch((err) => {
                    console.log(err);
                });
        }catch (err){
            console.log(err)
        }
    }

    render() {
        return (
            <Container className="vh-100 d-flex flex-column ">
                <Card className="text-center">
                    <Card.Body>Prestiti scaduti da 3 giorni e prossimi alla scadenza in 3 giorni</Card.Body>
                </Card>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Inizio</th>
                        <th>Scadenza</th>
                        <th>ISBN</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.rents.map((rent) => {
                        return [
                            <tr key={rent.ID}>
                                <th>{rent.ID}</th>
                                <th>{rent.start}</th>
                                <th>{rent.expiry}</th>
                                <th>{rent.ISBN}</th>
                            </tr>,
                        ];
                    })}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default RentExpiries;