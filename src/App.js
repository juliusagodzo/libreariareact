import React from "react";
import Home from "./components/Home.js"
import {Route, BrowserRouter, Routes} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import DefNavbar from "./components/Navbar.js";
import UpdateBook from "./components/UpdateBook.js"
import AddBook from "./components/AddBook"
import DeleteBook from "./components/DeleteBook"
import RentBook from "./components/RentBook"
import ReturnBook from "./components/ReturnBook"
import RentExpiries from "./components/RentExpiries"

const App = () => {
  window.onbeforeunload = null;

  return (
      <BrowserRouter>
        <Container>
          <Row>
            <Col lg={12} className={"margin-top"}>
              <DefNavbar/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/update" element={<UpdateBook/>} />
                <Route path="/add" element={<AddBook/>} />
                <Route path="/delete" element={<DeleteBook/>} />
                <Route path="/rent" element={<RentBook/>} />
                <Route path="/return" element={<ReturnBook/>} />
                <Route path="/expiries" element={<RentExpiries/>} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
  );
};
export default App;
