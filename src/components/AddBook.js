import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import apiPath from "../Config";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookISBN: "",
      bookTitle: "",
      bookAuthor: "",
      added: null,
      error: " "
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    var details = {
        'ISBN': this.state.bookISBN,
        'Autore': this.state.bookAuthor,
        'Titolo': this.state.bookTitle
    };
    
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    try {
      let res = await fetch(apiPath + "/api/book/add", {
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
              <Card.Body>Libro aggiunto con successo</Card.Body>
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
              <Card.Body>Inserisci un libro</Card.Body>
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

              <Form.Group className="mb-3">
                <Form.Label>Autore Libro</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Autore"
                  value={this.state.bookAuthor}
                  onChange={(e) => this.setState({ bookAuthor: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Titolo Libro</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Titolo"
                  value={this.state.bookTitle}
                  onChange={(e) => this.setState({ bookTitle: e.target.value })}
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

export default AddBook;