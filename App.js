import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantList from "./components/RestaurantList";
import RestaurantUpdate from "./components/RestaurantUpdate";
const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<RestaurantCreate />} />
        <Route path="/details" element={<RestaurantDetails />} />
        <Route path="/list" element={<RestaurantList />} />
        <Route path="/update/:id" element={<RestaurantUpdate />} />
      </Routes>
    </>
  );
};

export default App;
