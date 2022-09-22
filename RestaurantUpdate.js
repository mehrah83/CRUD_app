import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate} from "react-router-dom";
const RestaurantUpdate = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const getRestaurantDetails = async () => {
    // console.log(params);
    let result = await fetch(`http://localhost:3000/restaurant/${params.id}`);
    let data = await result.json();
    // console.log(data); 
    setName(data.name);
    setAddress(data.address);
    setContact(data.contact);
    setEmail(data.email);
    setRating(data.rating);
  }


  useEffect(() => {
    getRestaurantDetails();
  }, []);


  const updateUser = async () => {
    // console.log({name,address,contact,email,rating});
    let result = await fetch(`http://localhost:3000/restaurant/${params.id}`,{
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({name,address,contact,email,rating}),
    });
    let data = await result.json();
    // console.log(data);
    navigate("/list");
  }

  const submitHandler = (event) => {
    event.preventDefault();
  }
  return (
    <>
      <Container>
      <h1 className="text-center my-3">Restaurant Update</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Restaurant Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Restaurant Location" value={address} onChange={(e) => {setAddress(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact No</Form.Label>
        <Form.Control type="number" placeholder="Enter Restaurant Contact No" value={contact} onChange={(e) => {setContact(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Restaurant Email Id" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number" placeholder="Enter Restaurant Rating" value={rating} onChange={(e) => {setRating(e.target.value)}}/>
      </Form.Group>
      <div className="d-grid">
      <Button variant="primary" type="submit" onClick={updateUser}>
        Update
      </Button>
      </div>
    </Form>
    </Container>
    </>
  );
};

export default RestaurantUpdate;
