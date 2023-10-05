import React, { useEffect, useState } from "react";
import Header from "../Components/Nav/Header";
import TarotCard from "../Components/Tarrot/TarotCard";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const CardDetail = () => {
  const [tarrot, settarrotData] = useState([]);
  const { id } = useParams();
  const url = "https://mocki.io/v1/99633923-cf06-4314-a900-15b9b465a667";
  useEffect(() => {
    axios.get(url).then(
      (res) => {
        console.log(res.data.majorArcana);
        const data = res.data.majorArcana;
        const PreviousData = data.filter((data) => {
          return data.id === id;
        });

        settarrotData(PreviousData[0]);
      },
      [id]
    );
  });

  return (
    <Container fluid className="bg-black text-center align-items-center ">
      <Header />

      <Row className="text-white p-5">
        <Col>
          <img
            src={tarrot.image}
            className="contain"
            style={{ width: "18rem" }}
          ></img>
        </Col>
        <Col>
          <h2 className="fw-normal ">{tarrot.name}</h2>
          <p className="fw-light fs-6 p-2 text-wrap">{tarrot.detail}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CardDetail;
