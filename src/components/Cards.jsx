import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import styled from "styled-components";

const Cards = props => {
  const [politicos, setPoliticos] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      setPoliticos(persons);
    });
  }, []);

  const politicosList = politicos.map((politico, i) => {
    return (
      <Card
        key={politico.id}
        nombre={politico.name}
        id={politico.id}
        ciudad={politico.address.city}
      />
    );
  });

  return <CardListWrapper>{politicosList}</CardListWrapper>;
};

const CardListWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 90%;
`;
export default Cards;
