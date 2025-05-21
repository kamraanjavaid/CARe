import React from "react";
import "./common.css";
import Button from "./Button";

const cars = [
  {
    name: "Toyota Corolla 2022",
    price: "$45/day",
    specs: "5 Seats • Automatic • AC",
    image: "/images/car1.jpg",
  },
  {
    name: "BMW 3 Series",
    price: "$80/day",
    specs: "5 Seats • Automatic • AC",
    image: "/images/car2.jpg",
  },
  {
    name: "Kia Sportage",
    price: "$60/day",
    specs: "5 Seats • Manual • AC",
    image: "/images/car3.jpg",
  },
];

export default function FeaturedCars() {
  return (
    <div className="featured-section">
      <h2>Our <span>Popular</span> Cars</h2>
      <p>Choose from a wide range of vehicles</p>
      <div className="car-grid">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.name} className="car-image" />
            <h3>{car.name}</h3>
            <p className="specs">{car.specs}</p>
            <p className="price">{car.price}</p>
            <div style={{display:"flex", justifyContent:"center"}}><Button/></div>
          </div>
        ))}
      </div>
    </div>
  );
}
