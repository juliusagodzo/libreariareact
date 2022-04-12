import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import apiPath from "../Config";

class DeleteBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookISBN: "",
      added: null,
      error: " "
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    var formBody = new URLSearchParams({'ISBN': this.state.bookISBN});

    try {
      let res = await fetch(apiPath + "/api/book/delete", {
        method: "DELETE",
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
              <Card.Body>Libro rimosso con successo</Card.Body>
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
              <Card.Body>Inserisci l'isbn del libro che vuoi eliminare</Card.Body>
            </Card>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>ISBN Libro</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ISBN"
                  value={this.state.bookISBN}
                  onChange={(e) => this.setState({ bookISBN: e.target.value })}
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

export default DeleteBook;