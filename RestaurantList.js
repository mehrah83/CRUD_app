import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const RestaurantList = () => {
  const [list, setList] = useState(null);

  const getList = async () => {
    let result = await fetch("http://localhost:3000/restaurant");
    let data = await result.json();
    setList(data);
  };
  useEffect(() => {
    getList();
  }, []);

  const deleteUser = async (id) => {
    let result = await fetch(`http://localhost:3000/restaurant/${id}`, {
      method: "DELETE",
    });
    let data = await result.json();
    if (data) {
      getList();
    }
  };
  // console.log(list);

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:3000/restaurant?q=${key}`);
      let data = await result.json();
      if (data) {
        setList(data);
      }
    } else {
      getList();
    }
  };
  return (
    <>
      <Container>
        <h1 className="text-center my-3">Restaurant List</h1>
        <input
          type="text"
          placeholder="Search Here"
          className="searchBox"
          onChange={searchHandle}
        />
        {
          list ? (
            <Table striped variant="dark" bordered responsive>
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.length > 0 ? list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                      <td>{item.rating}</td>
                      <td className="button-grp">
                        <Button variant="primary">
                          <Link
                            to={`/update/${item.id}`}
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            EDIT
                          </Link>
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => deleteUser(item.id)}
                          className="delete_button"
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })
                : <h1 style={{color:"black"}} className="text-center">Sorry! No data found</h1>
                }
              </tbody>
            </Table>
          ) : (
            <p>Please Wait...</p>
          ) // Agr hmaari api abhi bhi null rhti hai tb yeh call hoga
        }
      </Container>
    </>
  );
};

export default RestaurantList;
