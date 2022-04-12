import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import apiPath from "../Config";

class ReturnBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rentId: "",
            added: null,
            error: ""
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        var formBody = new URLSearchParams({'ID': this.state.rentId});

        try {
            let res = await fetch(apiPath + "/api/book/return", {
                method: "POST",
                body: formBody,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            });

            if(res.status === 200) {
                this.setState({ added: true })
            }else{
                res.json().then(data => this.setState({ error: data }))
                this.setState({ added: false })
            }
        } catch (err) {
            console.log(err);
        }
    };


    render() {
        switch(this.state.added){
            case true:
                return(
                    <div>
                        <Card bg='success' className="col-md-5 mx-auto text-center">
                            <Card.Body>Libro restituito con successo</Card.Body>
                        </Card>
                    </div>
                );
            case false:
                return(
                    <div>
                        <Card bg='danger' className="col-md-5 mx-auto text-center">
                            <Card.Body>Error:{this.state.error}</Card.Body>
                        </Card>
                    </div>
                );
            default:
                return (
                    <div>
                        <Card className="text-center">
                            <Card.Body>Inserisci l'id del prestito</Card.Body>
                        </Card>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>ID Prestito</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="ID"
                                    value={this.state.rentId}
                                    onChange={(e) => this.setState({ rentId: e.target.value })}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                Invio
                            </Button>
                        </Form>
                    </div>
                );
        }
    }
}

export default ReturnBook;