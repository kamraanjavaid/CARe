import React from "react";
import { CarOutlined, DollarCircleOutlined, UserSwitchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Card from "./ServiceCard"; // New card component

const Services = () => {
  const services = [
    {
      title: "Luxury Cars",
      description: "Enjoy top-tier comfort and elegance in every ride.",
      icon: <CarOutlined style={{ fontSize: "40px" }} />,
    },
    {
      title: "Affordable Rides",
      description: "Reliable and budget-friendly cars for everyday use.",
      icon: <DollarCircleOutlined style={{ fontSize: "40px" }} />,
    },
    {
      title: "Self Drive",
      description: "Freedom to drive at your own pace and comfort.",
      icon: <UserSwitchOutlined style={{ fontSize: "40px" }} />,
    },
  ];

  return (
    <SectionWrapper>
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  padding: 80px 40px;
  background-color:rgb(172, 172, 203);
  text-align: center;

  .section-title {
    font-size: 36px;
    color: #222;
    margin-bottom: 50px;
    color:white;
  }

  .services-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
  }
`;

export default Services;
