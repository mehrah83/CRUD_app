import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';

const RestaurantCreate = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");

  const create = () => {
    console.log({name, address, contact, email, rating});
    let data = {name, address, contact, email, rating};
    fetch("http://localhost:3000/restaurant", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      // console.log("Result is ",result);
      result.json().then((resp) => {
        console.log("Response is ", resp);
        alert("Restaurant details has been added successfully")
      });
    }) 
  }

  const submitHandler = (event) => {
    event.preventDefault();
  }


  return (
    <>
    <Container>
      <h1 className="text-center my-3">Restaurant Create</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Restaurant Name" value={name} name="name" onChange={(e) => {setName(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Restaurant Location" value={address} name="address" onChange={(e) => {setAddress(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact No</Form.Label>
        <Form.Control type="number" placeholder="Enter Restaurant Contact No" value={contact} name="contact" onChange={(e) => {setContact(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Restaurant Email Id" value={email} name="email" onChange={(e) => {setEmail(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number" placeholder="Enter Restaurant Rating" value={rating} name="rating" onChange={(e) => {setRating(e.target.value)}}/>
      </Form.Group>
      <div className="d-grid">
      <Button variant="success" type="submit" onClick={() => create()}>
        Submit
      </Button>
      </div>
    </Form>
    </Container>
    </>
  );
};

export default RestaurantCreate;
